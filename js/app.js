(() => {
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  window.EXAMS = window.EXAMS || [];
  window.registerExam = function registerExam(exam) {
    if (!exam || !exam.id || !Array.isArray(exam.questions)) {
      console.warn('Invalid exam file:', exam);
      return;
    }
    const idx = window.EXAMS.findIndex(e => e.id === exam.id);
    if (idx >= 0) window.EXAMS[idx] = exam;
    else window.EXAMS.push(exam);
  };

  let currentExamId = null;
  let submitted = false;

  function escapeHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  }

  function normalize(value, type) {
    let v = String(value ?? '').trim().toLowerCase();
    v = v.replace(/[，]/g, ',');
    if (type === 'decimal') {
      v = v.replace(/,/g, '').replace(/\s+/g, '');
      v = v.replace(/(ps|bits?|blocks?|sets?|cycles?|nops?|stalls?)$/g, '');
      return v;
    }
    if (type === 'hex') {
      v = v.replace(/\s+/g, '').replace(/_/g, '');
      if (v.startsWith('0x')) v = v.slice(2);
      return v.replace(/^0+(?=[0-9a-f])/, '');
    }
    if (type === 'binary') {
      v = v.replace(/\s+/g, '').replace(/_/g, '');
      if (v.startsWith('0b')) v = v.slice(2);
      return v;
    }
    if (type === 'symbol') {
      return v.replace(/\s+/g, '');
    }
    return v.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim();
  }

  function isCorrect(inputValue, field) {
    const user = normalize(inputValue, field.type);
    return (field.answers || []).some(ans => normalize(ans, field.type) === user);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error(`Không load được ${src}`));
      document.head.appendChild(s);
    });
  }

  async function loadExamFiles() {
    const files = window.EXAM_FILES || [];
    for (const file of files) {
      await loadScript(`exams/${file}`);
    }
  }

  function allFieldsOfQuestion(q) {
    const fields = [];
    const add = item => {
      if (!item) return;
      if (Array.isArray(item)) item.forEach(add);
      else if (item.group) add(item.group);
      else if (item.id && item.answers) fields.push(item);
    };
    add(q.fields_intro);
    add(q.fields);
    if (q.rows) q.rows.forEach(row => add(row.cells));
    add(q.fields_extra);
    return fields;
  }

  function answerToShow(field) {
    return field.show ?? (field.answers || [])[0] ?? '';
  }

  function inputClassFor(field) {
    const classes = ['field-input'];
    if (field.type) classes.push(`type-${field.type}`);
    const ans = String(answerToShow(field));
    if (/^T\(.*\)=/.test(ans)) classes.push('type-way');
    if (ans.length >= 8) classes.push('wide-answer');
    if (ans.length >= 12) classes.push('xwide-answer');
    return classes.join(' ');
  }

  function placeholderFor(field) {
    if (field.placeholder) return field.placeholder;
    const ans = String(answerToShow(field));
    if (/^T\(.*\)=/.test(ans)) return 'T(...)=...';
    if (field.type === 'binary') return 'bits';
    if (field.type === 'hex') return 'hex';
    return 'Điền đáp án';
  }

  function renderInput(field) {
    const maxLen = Math.max(String(answerToShow(field)).length + 4, 4);
    return `<div class="answer-line"><input class="${escapeHtml(inputClassFor(field))}" data-field-id="${escapeHtml(field.id)}" data-field-type="${escapeHtml(field.type || 'text')}" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(placeholderFor(field))}" size="${escapeHtml(Math.min(Math.max(maxLen, 4), 18))}" /><span class="unit">${escapeHtml(field.unit || '')}</span><span class="status-mark" data-mark-for="${escapeHtml(field.id)}"></span></div><div class="correct-answer" data-answer-for="${escapeHtml(field.id)}"></div>`;
  }

  function renderFieldGrid(fields) {
    if (!fields || !fields.length) return '';
    return `<div class="field-grid">${fields.map(f => `<div class="field" data-wrap-for="${escapeHtml(f.id)}"><label>${escapeHtml(f.label)}</label>${renderInput(f)}</div>`).join('')}</div>`;
  }

  function renderTableCell(cell) {
    if (Array.isArray(cell)) {
      if (cell.length === 0) return '<div class="cell-group empty" aria-label="empty"></div>';
      return `<div class="cell-group">${cell.map(f => `<div class="cell-field" data-wrap-for="${escapeHtml(f.id)}"><label class="sr-only">Ô nhập đáp án</label>${renderInput(f)}</div>`).join('')}</div>`;
    }
    if (cell && cell.group) return renderTableCell(cell.group);
    if (cell && cell.id) return `<div class="cell-field" data-wrap-for="${escapeHtml(cell.id)}">${renderInput(cell)}</div>`;
    return '';
  }

  function renderAccessTable(q) {
    const intro = renderFieldGrid(q.fields_intro);
    const head = (q.columns || []).map((c, i) => `<th class="col-${i}">${escapeHtml(c)}</th>`).join('');
    const rows = (q.rows || []).map(row => `<tr><td class="addr col-0">${escapeHtml(row.addr)}</td>${(row.cells || []).map((cell, i) => `<td class="col-${i+1}">${renderTableCell(cell)}</td>`).join('')}</tr>`).join('');
    const table = `<div class="table-scroll"><table class="access-table table-${escapeHtml(q.id)}"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
    return `${intro}${table}${renderFieldGrid(q.fields_extra)}`;
  }

  function imageSrc(keyOrPath) {
    if (!keyOrPath) return '';
    return (window.EXAM_ASSETS && window.EXAM_ASSETS[keyOrPath]) || keyOrPath;
  }

  function renderDatapath(q) {
    const ctrl = q.control_labels || ['RegWrite','ALUSrc','MemWrite','MemtoReg','MemRead','Branch','ALUOp','O','Zero'];
    const vals = q.signal_labels || ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R'];
    const find = label => (q.fields || []).find(f => f.label === label);
    function tableFor(labels, title) {
      const rows = labels.map(label => {
        const f = find(label);
        return f ? `<tr><th>${escapeHtml(label)}</th><td data-wrap-for="${escapeHtml(f.id)}">${renderInput(f)}</td></tr>` : '';
      }).join('');
      return `<div><h4>${escapeHtml(title)}</h4><div class="table-scroll"><table class="compact-table datapath-table table-${escapeHtml(q.id)}"><tbody>${rows}</tbody></table></div></div>`;
    }
    const img = q.image ? `<div class="diagram-wrap"><img src="${escapeHtml(imageSrc(q.image))}" alt="${escapeHtml(q.title)}"></div>` : '';
    return `${img}<p class="small-note"><b>Note:</b> don't care = <code>x</code>, unknown = <code>?</code>.</p><div class="datapath-grid">${tableFor(ctrl, 'Control signals')}${tableFor(vals, 'Signals A, B, C, ..., R')}</div>`;
  }

  function renderPipeline(q) {
    const cols = q.pipe_cols || ['A','B','C','D','E','F','G'];
    const rowsName = q.pipe_rows || [];
    const fields = q.fields || [];
    const find = (rowName, r, col) => fields.find(f => f.label === `${rowName} - ${col}`) || fields.find(f => f.id === `${q.id}_r${r}_${col}`) || fields.find(f => f.id.endsWith(`_r${r}_${col}`));
    const rows = rowsName.map((rowName, r) => `<tr><td class="addr">${escapeHtml(rowName)}</td>${cols.map(col => {
      const f = find(rowName, r, col);
      return `<td>${f ? renderTableCell(f) : ''}</td>`;
    }).join('')}</tr>`).join('');
    const img = q.image ? `<div class="diagram-wrap"><img src="${escapeHtml(imageSrc(q.image))}" alt="${escapeHtml(q.title)}"></div>` : '';
    return `${img}<div class="table-scroll"><table class="pipeline-table table-${escapeHtml(q.id)}"><thead><tr><th>Cycle</th>${cols.map((c, i) => `<th class="col-${i+1}">${escapeHtml(c)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  function renderQuestion(q, index) {
    let body = '';
    if (q.type === 'fields') body = renderFieldGrid(q.fields);
    else if (q.type === 'access_table') body = renderAccessTable(q);
    else if (q.type === 'datapath') body = renderDatapath(q);
    else if (q.type === 'pipeline') body = renderPipeline(q);
    else body = `<div class="load-error">Chưa hỗ trợ kiểu câu hỏi: ${escapeHtml(q.type)}</div>`;

    return `<article class="question-card" data-qid="${escapeHtml(q.id)}">
      <div class="question-head"><h2 class="question-title">${index+1}. ${escapeHtml(q.title)}</h2><span class="question-points">${escapeHtml(q.points)} điểm</span></div>
      <div class="prompt">${q.prompt || ''}</div>
      ${body}
      <div class="question-score" data-score-for="${escapeHtml(q.id)}"></div>
      <div class="solution"><b>Giải thích:</b> ${q.solution || ''}</div>
    </article>`;
  }

  function currentExam() {
    return window.EXAMS.find(e => e.id === currentExamId) || window.EXAMS[0];
  }

  function storageKey() { return `riscv-practice-${currentExamId}`; }

  function saveAnswers() {
    if (!currentExamId) return;
    const data = {};
    $$('input[data-field-id]').forEach(inp => data[inp.dataset.fieldId] = inp.value);
    localStorage.setItem(storageKey(), JSON.stringify(data));
  }

  function restoreAnswers() {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey()) || '{}');
      $$('input[data-field-id]').forEach(inp => { if (data[inp.dataset.fieldId] !== undefined) inp.value = data[inp.dataset.fieldId]; });
    } catch(e) {}
  }

  function bindAutoSave() {
    $$('input[data-field-id]').forEach(inp => inp.addEventListener('input', saveAnswers));
  }

  function fillExamSelect() {
    const select = $('#examSelect');
    select.innerHTML = window.EXAMS.map(e => `<option value="${escapeHtml(e.id)}">${escapeHtml(e.title)}</option>`).join('');
    if (!currentExamId && window.EXAMS[0]) currentExamId = window.EXAMS[0].id;
    select.value = currentExamId;
  }

  function renderExam() {
    const exam = currentExam();
    if (!exam) {
      $('#examRoot').innerHTML = '<div class="load-error">Chưa có đề nào được load. Kiểm tra thư mục exams/ và file exams/index.js.</div>';
      return;
    }
    document.body.classList.remove('submitted');
    submitted = false;
    $('#scorePill').textContent = 'Chưa nộp';
    $('#resultCard').classList.remove('show');
    $('#examRoot').innerHTML = `<div class="question-card"><h2>${escapeHtml(exam.title)}</h2><p class="sub">${escapeHtml(exam.description || '')}</p></div>` + exam.questions.map(renderQuestion).join('');
    restoreAnswers();
    bindAutoSave();
  }

  function gradeExam() {
    const exam = currentExam();
    if (!exam) return;
    let totalPoints = 0, earnedPoints = 0, correctAll = 0, fieldAll = 0;
    document.body.classList.add('submitted');
    submitted = true;

    exam.questions.forEach(q => {
      const fields = allFieldsOfQuestion(q);
      let correct = 0;
      fields.forEach(f => {
        const inp = $(`input[data-field-id="${CSS.escape(f.id)}"]`);
        const wrap = $(`[data-wrap-for="${CSS.escape(f.id)}"]`);
        const mark = $(`[data-mark-for="${CSS.escape(f.id)}"]`);
        if (!inp) return;
        const ok = isCorrect(inp.value, f);
        inp.classList.toggle('correct', ok);
        inp.classList.toggle('wrong', !ok);
        if (wrap) { wrap.classList.toggle('correct', ok); wrap.classList.toggle('wrong', !ok); }
        if (mark) { mark.textContent = ok ? '✓' : '✗'; mark.className = 'status-mark ' + (ok ? 'ok' : 'bad'); }
        const ansEl = $(`[data-answer-for="${CSS.escape(f.id)}"]`);
        if (ansEl) ansEl.innerHTML = `Đáp án: <strong>${escapeHtml(answerToShow(f))}</strong>`;
        if (ok) correct++;
      });
      const qEarned = fields.length ? q.points * correct / fields.length : 0;
      totalPoints += Number(q.points || 0);
      earnedPoints += qEarned;
      correctAll += correct;
      fieldAll += fields.length;
      const qScoreEl = $(`[data-score-for="${CSS.escape(q.id)}"]`);
      if (qScoreEl) qScoreEl.textContent = `Điểm câu này: ${qEarned.toFixed(2)}/${q.points} điểm (${correct}/${fields.length} ô đúng)`;
    });

    const percent = totalPoints ? earnedPoints / totalPoints * 100 : 0;
    $('#bigScore').textContent = `${earnedPoints.toFixed(2)}/${totalPoints}`;
    $('#progressBar').style.width = `${percent}%`;
    $('#detailScore').innerHTML = `<b>${percent.toFixed(1)}%</b><br>${correctAll}/${fieldAll} ô đúng`;
    $('#scorePill').textContent = `${earnedPoints.toFixed(2)}/${totalPoints}`;
    $('#resultCard').classList.add('show');
    saveAnswers();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function resetAttempt(clearStorage=false) {
    $$('input[data-field-id]').forEach(inp => { inp.value = ''; inp.classList.remove('correct','wrong'); });
    $$('.correct, .wrong').forEach(el => el.classList.remove('correct','wrong'));
    $$('.status-mark').forEach(el => { el.textContent = ''; el.className = 'status-mark'; });
    $$('.question-score').forEach(el => el.textContent = '');
    $$('.correct-answer').forEach(el => el.textContent = '');
    $('#resultCard').classList.remove('show');
    $('#scorePill').textContent = 'Chưa nộp';
    document.body.classList.remove('submitted');
    submitted = false;
    if (clearStorage) localStorage.removeItem(storageKey()); else saveAnswers();
  }

  function bindFileLoader() {
    $('#examFileInput').addEventListener('change', async (ev) => {
      const file = ev.target.files && ev.target.files[0];
      if (!file) return;
      try {
        const text = await file.text();
        const exam = JSON.parse(text);
        window.registerExam(exam);
        currentExamId = exam.id;
        fillExamSelect();
        renderExam();
      } catch (err) {
        alert('Không đọc được file JSON đề: ' + err.message);
      }
    });
  }

  async function init() {
    try {
      await loadExamFiles();
    } catch (err) {
      $('#examRoot').innerHTML = `<div class="load-error">${escapeHtml(err.message)}</div>`;
    }
    fillExamSelect();
    const select = $('#examSelect');
    select.addEventListener('change', () => { currentExamId = select.value; renderExam(); });
    $('#submitBtn').addEventListener('click', gradeExam);
    $('#resetBtn').addEventListener('click', () => resetAttempt(false));
    $('#clearBtn').addEventListener('click', () => { if (confirm('Xóa toàn bộ đáp án đã lưu của đề hiện tại?')) resetAttempt(true); });
    bindFileLoader();
    renderExam();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
