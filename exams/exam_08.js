window.registerExam({
  "id": "exam_08",
  "title": "Đề luyện tập 08 - RISC-V, Cache và Pipeline",
  "description": "Đề luyện tập 08. Mỗi câu 10 điểm.",
  "questions": [
    {
      "id": "q1",
      "type": "pipeline",
      "points": 10,
      "title": "5-stage pipeline with forwarding and hazard detection",
      "image": "pipeline_datapath",
      "prompt": "Assume that the following code sequence is executed on the 5-stage pipelined processor with forwarding and hazard detection units shown below:<br><pre>add x12, x3, x4\nsub x13, x12, x5\nor x14, x13, x12\nsw  x14, 8(x13)\nlw  x15, 0(x14)</pre>For the first seven cycles, specify the values of control signals at A, B, C, D, E, F, and G.",
      "pipe_rows": [
        "1st",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th"
      ],
      "fields": [
        {
          "id": "q1_r0_A",
          "label": "1st - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r0_B",
          "label": "1st - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r0_C",
          "label": "1st - C",
          "answers": [
            "xx"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "xx"
        },
        {
          "id": "q1_r0_D",
          "label": "1st - D",
          "answers": [
            "xx"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "xx"
        },
        {
          "id": "q1_r0_E",
          "label": "1st - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r0_F",
          "label": "1st - F",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q1_r0_G",
          "label": "1st - G",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q1_r1_A",
          "label": "2nd - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r1_B",
          "label": "2nd - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r1_C",
          "label": "2nd - C",
          "answers": [
            "xx"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "xx"
        },
        {
          "id": "q1_r1_D",
          "label": "2nd - D",
          "answers": [
            "xx"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "xx"
        },
        {
          "id": "q1_r1_E",
          "label": "2nd - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r1_F",
          "label": "2nd - F",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q1_r1_G",
          "label": "2nd - G",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q1_r2_A",
          "label": "3rd - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r2_B",
          "label": "3rd - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r2_C",
          "label": "3rd - C",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q1_r2_D",
          "label": "3rd - D",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q1_r2_E",
          "label": "3rd - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r2_F",
          "label": "3rd - F",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q1_r2_G",
          "label": "3rd - G",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q1_r3_A",
          "label": "4th - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r3_B",
          "label": "4th - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r3_C",
          "label": "4th - C",
          "answers": [
            "10"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q1_r3_D",
          "label": "4th - D",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q1_r3_E",
          "label": "4th - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r3_F",
          "label": "4th - F",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r3_G",
          "label": "4th - G",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q1_r4_A",
          "label": "5th - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r4_B",
          "label": "5th - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r4_C",
          "label": "5th - C",
          "answers": [
            "10"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q1_r4_D",
          "label": "5th - D",
          "answers": [
            "01"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01"
        },
        {
          "id": "q1_r4_E",
          "label": "5th - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r4_F",
          "label": "5th - F",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r4_G",
          "label": "5th - G",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r5_A",
          "label": "6th - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r5_B",
          "label": "6th - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r5_C",
          "label": "6th - C",
          "answers": [
            "01"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01"
        },
        {
          "id": "q1_r5_D",
          "label": "6th - D",
          "answers": [
            "10"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q1_r5_E",
          "label": "6th - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r5_F",
          "label": "6th - F",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r5_G",
          "label": "6th - G",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r6_A",
          "label": "7th - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r6_B",
          "label": "7th - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r6_C",
          "label": "7th - C",
          "answers": [
            "01"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01"
        },
        {
          "id": "q1_r6_D",
          "label": "7th - D",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q1_r6_E",
          "label": "7th - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q1_r6_F",
          "label": "7th - F",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q1_r6_G",
          "label": "7th - G",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        }
      ],
      "solution": "First seven cycle matrix (A B C D E F G): 1 1 xx xx 1 x x; 1 1 xx xx 1 x x; 1 1 00 00 1 x x; 1 1 10 00 1 1 x; 1 1 10 01 1 1 1; 1 1 01 10 1 1 1; 1 1 01 00 1 0 1 This sequence has no load-use stall in the first seven cycles, but it uses several forwarding cases: EX/MEM and MEM/WB to both ALU inputs."
    },
    {
      "id": "q2",
      "type": "fields",
      "points": 10,
      "title": "Cache parameters: 8-way set associative, write-back",
      "prompt": "Here is the cache with the following key characteristics:<br>■ <b>8-Way Set Associative Cache</b><br>■ Write policy: <b>Write-back using write allocate</b> with one Dirty bit per block<br>■ Block size is <b>64 bytes</b><br>■ Cache size is <b>128 KB</b><br>■ Memory is byte addressing with <b>32-bit addresses</b>.<br><br>Fill in the following values.",
      "fields": [
        {
          "id": "q2_index",
          "label": "Set index",
          "answers": [
            "8"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "8"
        },
        {
          "id": "q2_offset",
          "label": "Block offset",
          "answers": [
            "6"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "6"
        },
        {
          "id": "q2_tag",
          "label": "Tag size for a block",
          "answers": [
            "18"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "18"
        },
        {
          "id": "q2_blocks",
          "label": "Number of blocks",
          "answers": [
            "2048"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "2048"
        },
        {
          "id": "q2_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "1089536"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "1089536"
        }
      ],
      "solution": "Blocks = 128KB/64B = 2048. Sets = 2048/8 = 256, so index = 8 bits. Offset = log2(64) = 6 bits. Tag = 32 - 8 - 6 = 18 bits. Total = 2048 × (64×8 + 18 tag + 1 valid + 1 dirty) = 1089536 bits."
    },
    {
      "id": "q3",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: lw",
      "image": "single_cycle_datapath",
      "prompt": "Consider a single-cycle RISC-V processor with add, sub, and, or, lw, sw and beq.<br><br>Let the processor execute:<br><code>lw x19, -36(x10)</code><br>at address <b>6128</b>. Suppose register xi = <b>52i</b> for i=1,...,31. Suppose memory[M] = <b>M + 720</b>.",
      "fields": [
        {
          "id": "q3_RegWrite",
          "label": "RegWrite",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q3_ALUSrc",
          "label": "ALUSrc",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q3_MemWrite",
          "label": "MemWrite",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q3_MemtoReg",
          "label": "MemtoReg",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q3_MemRead",
          "label": "MemRead",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q3_Branch",
          "label": "Branch",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q3_ALUOp",
          "label": "ALUOp",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q3_O",
          "label": "O",
          "answers": [
            "0010"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0010"
        },
        {
          "id": "q3_Zero",
          "label": "Zero",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q3_A",
          "label": "A",
          "answers": [
            "6128"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "6128"
        },
        {
          "id": "q3_B",
          "label": "B",
          "answers": [
            "0xFDC52983"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0xFDC52983"
        },
        {
          "id": "q3_C",
          "label": "C",
          "answers": [
            "01010"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01010"
        },
        {
          "id": "q3_D",
          "label": "D",
          "answers": [
            "11100"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "11100"
        },
        {
          "id": "q3_E",
          "label": "E",
          "answers": [
            "10011"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10011"
        },
        {
          "id": "q3_F",
          "label": "F",
          "answers": [
            "0000011"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0000011"
        },
        {
          "id": "q3_G",
          "label": "G",
          "answers": [
            "-72"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "-72"
        },
        {
          "id": "q3_H",
          "label": "H",
          "answers": [
            "6132"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "6132"
        },
        {
          "id": "q3_I",
          "label": "I",
          "answers": [
            "520"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "520"
        },
        {
          "id": "q3_J",
          "label": "J",
          "answers": [
            "-36"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "-36"
        },
        {
          "id": "q3_K",
          "label": "K",
          "answers": [
            "484"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "484"
        },
        {
          "id": "q3_L",
          "label": "L",
          "answers": [
            "1456"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "1456"
        },
        {
          "id": "q3_M",
          "label": "M",
          "answers": [
            "1204"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "1204"
        },
        {
          "id": "q3_N",
          "label": "N",
          "answers": [
            "1204"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "1204"
        },
        {
          "id": "q3_P",
          "label": "P",
          "answers": [
            "6128"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "6128"
        },
        {
          "id": "q3_Q",
          "label": "Q",
          "answers": [
            "6132"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "6132"
        },
        {
          "id": "q3_R",
          "label": "R",
          "answers": [
            "6056"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "6056"
        }
      ],
      "solution": "x10 = 520. Effective address = 520 - 36 = 484. Memory[484] = 1204, so N = 1204. Encoding = 0xFDC52983."
    },
    {
      "id": "q4",
      "type": "fields",
      "points": 10,
      "title": "Fully associative cache parameters",
      "prompt": "Assume the main memory is <b>word addressing</b> with <b>8-bit addresses</b> and the cache is a <b>fully associative cache</b> with <b>4-word blocks</b> and a total size of <b>16 words</b>. Assume one word is <b>32 bits</b>.",
      "fields": [
        {
          "id": "q4_blocks_cache",
          "label": "Number of blocks in the cache",
          "answers": [
            "4"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "4"
        },
        {
          "id": "q4_sets",
          "label": "Number of sets in the cache",
          "answers": [
            "1"
          ],
          "type": "decimal",
          "unit": "sets",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q4_blocks_mem",
          "label": "Number of blocks in the memory",
          "answers": [
            "64"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "64"
        },
        {
          "id": "q4_tag",
          "label": "Number of tag bits in each block",
          "answers": [
            "6"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "6"
        },
        {
          "id": "q4_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "540"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "540"
        }
      ],
      "solution": "Cache blocks = 16/4 = 4. Fully associative => one set. Memory blocks = 2^8/4 = 64. Offset = log2(4) = 2 bits, so tag = 8 - 2 = 6 bits. Total = 4 × (4×32 + 6 tag + 1 valid) = 540 bits."
    },
    {
      "id": "q5",
      "type": "access_table",
      "points": 10,
      "title": "3-way set associative cache, điền Way theo thứ tự đưa vào",
      "prompt": "Assume the memory is <b>word addressing</b> with <b>8-bit addresses</b> and the cache is a <b>3-way set associative cache</b> with <b>2-word blocks</b> and a total size of <b>48 words</b>. Assume 1 word = <b>64 bits</b>.<br><br>First, fill in the cache parameters. Then use true LRU. For each reference, identify binary address, tag, set index, offset, hit/miss, and the tags in each way after the reference has been handled.<br><br><b>Lưu ý:</b> Nếu một Way có nhiều dòng như T(001)=0000, T(010)=1011, mỗi dòng sẽ là một ô nhập riêng. Các dòng trong Way giữ theo <b>thứ tự block được đưa vào way</b>, không sort theo set index.<br><br>Sequence of word addresses:<br><code>0x0c, 0x92, 0x35, 0x0d, 0x9a, 0x76, 0x9b, 0x36, 0x54, 0x93, 0xd2, 0x55, 0xf6, 0x37</code>",
      "fields_intro": [
        {
          "id": "q5_cache_blocks",
          "label": "Number of blocks in the cache",
          "answers": [
            "24"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "24"
        },
        {
          "id": "q5_sets",
          "label": "Number of sets in the cache",
          "answers": [
            "8"
          ],
          "type": "decimal",
          "unit": "sets",
          "hint": "",
          "show": "8"
        },
        {
          "id": "q5_mem_blocks",
          "label": "Number of blocks in the memory",
          "answers": [
            "128"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "128"
        },
        {
          "id": "q5_tag_bits",
          "label": "Number of tag bits in each block",
          "answers": [
            "4"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "4"
        },
        {
          "id": "q5_total_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "3192"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "3192"
        }
      ],
      "columns": [
        "Word Address in Hex",
        "Word Address in Binary",
        "Tag in Binary",
        "Set Index in Binary",
        "Offset in Binary",
        "Hit or Miss",
        "Way 0",
        "Way 1",
        "Way 2"
      ],
      "rows": [
        {
          "addr": "0x0c",
          "cells": [
            {
              "id": "q5_0_bin",
              "label": "Word address in binary",
              "answers": [
                "00001100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00001100"
            },
            {
              "id": "q5_0_tag",
              "label": "Tag in binary",
              "answers": [
                "0000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0000"
            },
            {
              "id": "q5_0_idx",
              "label": "Set index in binary",
              "answers": [
                "110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "110"
            },
            {
              "id": "q5_0_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q5_0_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q5_r0_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x92",
          "cells": [
            {
              "id": "q5_1_bin",
              "label": "Word address in binary",
              "answers": [
                "10010010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10010010"
            },
            {
              "id": "q5_1_tag",
              "label": "Tag in binary",
              "answers": [
                "1001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1001"
            },
            {
              "id": "q5_1_idx",
              "label": "Set index in binary",
              "answers": [
                "001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "001"
            },
            {
              "id": "q5_1_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q5_1_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q5_r1_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r1_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x35",
          "cells": [
            {
              "id": "q5_2_bin",
              "label": "Word address in binary",
              "answers": [
                "00110101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00110101"
            },
            {
              "id": "q5_2_tag",
              "label": "Tag in binary",
              "answers": [
                "0011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0011"
            },
            {
              "id": "q5_2_idx",
              "label": "Set index in binary",
              "answers": [
                "010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "010"
            },
            {
              "id": "q5_2_off",
              "label": "Offset in binary",
              "answers": [
                "1"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1"
            },
            {
              "id": "q5_2_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q5_r2_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r2_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r2_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x0d",
          "cells": [
            {
              "id": "q5_3_bin",
              "label": "Word address in binary",
              "answers": [
                "00001101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00001101"
            },
            {
              "id": "q5_3_tag",
              "label": "Tag in binary",
              "answers": [
                "0000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0000"
            },
            {
              "id": "q5_3_idx",
              "label": "Set index in binary",
              "answers": [
                "110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "110"
            },
            {
              "id": "q5_3_off",
              "label": "Offset in binary",
              "answers": [
                "1"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1"
            },
            {
              "id": "q5_3_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q5_r3_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r3_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r3_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x9a",
          "cells": [
            {
              "id": "q5_4_bin",
              "label": "Word address in binary",
              "answers": [
                "10011010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10011010"
            },
            {
              "id": "q5_4_tag",
              "label": "Tag in binary",
              "answers": [
                "1001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1001"
            },
            {
              "id": "q5_4_idx",
              "label": "Set index in binary",
              "answers": [
                "101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "101"
            },
            {
              "id": "q5_4_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q5_4_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q5_r4_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r4_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r4_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              },
              {
                "id": "q5_r4_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(101)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1001"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x76",
          "cells": [
            {
              "id": "q5_5_bin",
              "label": "Word address in binary",
              "answers": [
                "01110110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01110110"
            },
            {
              "id": "q5_5_tag",
              "label": "Tag in binary",
              "answers": [
                "0111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0111"
            },
            {
              "id": "q5_5_idx",
              "label": "Set index in binary",
              "answers": [
                "011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "011"
            },
            {
              "id": "q5_5_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q5_5_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q5_r5_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r5_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r5_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              },
              {
                "id": "q5_r5_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(101)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1001"
              },
              {
                "id": "q5_r5_w0_4",
                "label": "Way 0 line 5",
                "answers": [
                  "T(011)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0111"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x9b",
          "cells": [
            {
              "id": "q5_6_bin",
              "label": "Word address in binary",
              "answers": [
                "10011011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10011011"
            },
            {
              "id": "q5_6_tag",
              "label": "Tag in binary",
              "answers": [
                "1001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1001"
            },
            {
              "id": "q5_6_idx",
              "label": "Set index in binary",
              "answers": [
                "101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "101"
            },
            {
              "id": "q5_6_off",
              "label": "Offset in binary",
              "answers": [
                "1"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1"
            },
            {
              "id": "q5_6_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q5_r6_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r6_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r6_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              },
              {
                "id": "q5_r6_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(101)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1001"
              },
              {
                "id": "q5_r6_w0_4",
                "label": "Way 0 line 5",
                "answers": [
                  "T(011)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0111"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x36",
          "cells": [
            {
              "id": "q5_7_bin",
              "label": "Word address in binary",
              "answers": [
                "00110110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00110110"
            },
            {
              "id": "q5_7_tag",
              "label": "Tag in binary",
              "answers": [
                "0011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0011"
            },
            {
              "id": "q5_7_idx",
              "label": "Set index in binary",
              "answers": [
                "011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "011"
            },
            {
              "id": "q5_7_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q5_7_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q5_r7_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r7_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r7_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              },
              {
                "id": "q5_r7_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(101)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1001"
              },
              {
                "id": "q5_r7_w0_4",
                "label": "Way 0 line 5",
                "answers": [
                  "T(011)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0111"
              }
            ],
            [
              {
                "id": "q5_r7_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(011)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0011"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x54",
          "cells": [
            {
              "id": "q5_8_bin",
              "label": "Word address in binary",
              "answers": [
                "01010100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01010100"
            },
            {
              "id": "q5_8_tag",
              "label": "Tag in binary",
              "answers": [
                "0101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0101"
            },
            {
              "id": "q5_8_idx",
              "label": "Set index in binary",
              "answers": [
                "010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "010"
            },
            {
              "id": "q5_8_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q5_8_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q5_r8_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r8_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r8_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              },
              {
                "id": "q5_r8_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(101)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1001"
              },
              {
                "id": "q5_r8_w0_4",
                "label": "Way 0 line 5",
                "answers": [
                  "T(011)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0111"
              }
            ],
            [
              {
                "id": "q5_r8_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(011)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0011"
              },
              {
                "id": "q5_r8_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(010)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0101"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x93",
          "cells": [
            {
              "id": "q5_9_bin",
              "label": "Word address in binary",
              "answers": [
                "10010011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10010011"
            },
            {
              "id": "q5_9_tag",
              "label": "Tag in binary",
              "answers": [
                "1001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1001"
            },
            {
              "id": "q5_9_idx",
              "label": "Set index in binary",
              "answers": [
                "001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "001"
            },
            {
              "id": "q5_9_off",
              "label": "Offset in binary",
              "answers": [
                "1"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1"
            },
            {
              "id": "q5_9_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q5_r9_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r9_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r9_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              },
              {
                "id": "q5_r9_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(101)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1001"
              },
              {
                "id": "q5_r9_w0_4",
                "label": "Way 0 line 5",
                "answers": [
                  "T(011)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0111"
              }
            ],
            [
              {
                "id": "q5_r9_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(011)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0011"
              },
              {
                "id": "q5_r9_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(010)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0101"
              }
            ],
            []
          ]
        },
        {
          "addr": "0xd2",
          "cells": [
            {
              "id": "q5_10_bin",
              "label": "Word address in binary",
              "answers": [
                "11010010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "11010010"
            },
            {
              "id": "q5_10_tag",
              "label": "Tag in binary",
              "answers": [
                "1101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1101"
            },
            {
              "id": "q5_10_idx",
              "label": "Set index in binary",
              "answers": [
                "001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "001"
            },
            {
              "id": "q5_10_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q5_10_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q5_r10_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r10_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r10_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              },
              {
                "id": "q5_r10_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(101)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1001"
              },
              {
                "id": "q5_r10_w0_4",
                "label": "Way 0 line 5",
                "answers": [
                  "T(011)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0111"
              }
            ],
            [
              {
                "id": "q5_r10_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(011)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0011"
              },
              {
                "id": "q5_r10_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(010)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0101"
              },
              {
                "id": "q5_r10_w1_2",
                "label": "Way 1 line 3",
                "answers": [
                  "T(001)=1101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1101"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x55",
          "cells": [
            {
              "id": "q5_11_bin",
              "label": "Word address in binary",
              "answers": [
                "01010101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01010101"
            },
            {
              "id": "q5_11_tag",
              "label": "Tag in binary",
              "answers": [
                "0101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0101"
            },
            {
              "id": "q5_11_idx",
              "label": "Set index in binary",
              "answers": [
                "010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "010"
            },
            {
              "id": "q5_11_off",
              "label": "Offset in binary",
              "answers": [
                "1"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1"
            },
            {
              "id": "q5_11_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q5_r11_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r11_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r11_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              },
              {
                "id": "q5_r11_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(101)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1001"
              },
              {
                "id": "q5_r11_w0_4",
                "label": "Way 0 line 5",
                "answers": [
                  "T(011)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0111"
              }
            ],
            [
              {
                "id": "q5_r11_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(011)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0011"
              },
              {
                "id": "q5_r11_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(010)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0101"
              },
              {
                "id": "q5_r11_w1_2",
                "label": "Way 1 line 3",
                "answers": [
                  "T(001)=1101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1101"
              }
            ],
            []
          ]
        },
        {
          "addr": "0xf6",
          "cells": [
            {
              "id": "q5_12_bin",
              "label": "Word address in binary",
              "answers": [
                "11110110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "11110110"
            },
            {
              "id": "q5_12_tag",
              "label": "Tag in binary",
              "answers": [
                "1111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1111"
            },
            {
              "id": "q5_12_idx",
              "label": "Set index in binary",
              "answers": [
                "011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "011"
            },
            {
              "id": "q5_12_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q5_12_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q5_r12_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r12_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r12_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              },
              {
                "id": "q5_r12_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(101)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1001"
              },
              {
                "id": "q5_r12_w0_4",
                "label": "Way 0 line 5",
                "answers": [
                  "T(011)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0111"
              }
            ],
            [
              {
                "id": "q5_r12_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(011)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0011"
              },
              {
                "id": "q5_r12_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(010)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0101"
              },
              {
                "id": "q5_r12_w1_2",
                "label": "Way 1 line 3",
                "answers": [
                  "T(001)=1101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1101"
              }
            ],
            [
              {
                "id": "q5_r12_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(011)=1111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1111"
              }
            ]
          ]
        },
        {
          "addr": "0x37",
          "cells": [
            {
              "id": "q5_13_bin",
              "label": "Word address in binary",
              "answers": [
                "00110111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00110111"
            },
            {
              "id": "q5_13_tag",
              "label": "Tag in binary",
              "answers": [
                "0011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0011"
            },
            {
              "id": "q5_13_idx",
              "label": "Set index in binary",
              "answers": [
                "011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "011"
            },
            {
              "id": "q5_13_off",
              "label": "Offset in binary",
              "answers": [
                "1"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1"
            },
            {
              "id": "q5_13_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q5_r13_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(110)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0000"
              },
              {
                "id": "q5_r13_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1001"
              },
              {
                "id": "q5_r13_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(010)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0011"
              },
              {
                "id": "q5_r13_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(101)=1001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1001"
              },
              {
                "id": "q5_r13_w0_4",
                "label": "Way 0 line 5",
                "answers": [
                  "T(011)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0111"
              }
            ],
            [
              {
                "id": "q5_r13_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(011)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0011"
              },
              {
                "id": "q5_r13_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(010)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=0101"
              },
              {
                "id": "q5_r13_w1_2",
                "label": "Way 1 line 3",
                "answers": [
                  "T(001)=1101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1101"
              }
            ],
            [
              {
                "id": "q5_r13_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(011)=1111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1111"
              }
            ]
          ]
        }
      ],
      "fields_extra": [
        {
          "id": "q5_full",
          "label": "After these accesses, is the cache full?",
          "answers": [
            "no",
            "n",
            "không",
            "khong"
          ],
          "type": "text",
          "unit": "",
          "hint": "",
          "show": "no"
        },
        {
          "id": "q5_repl",
          "label": "How many replacements occurred?",
          "answers": [
            "0"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "0"
        }
      ],
      "solution": "Block offset = 1 bit, set index = 3 bits, tag = 4 bits. Hit/Miss sequence: M, M, M, H, M, M, H, M, M, H, M, H, M, H. Cache full: no. Replacements: 0. Way entries keep physical insertion order, not sorted by set index."
    },
    {
      "id": "q6",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: and",
      "image": "single_cycle_datapath",
      "prompt": "Consider a single-cycle RISC-V processor with add, sub, and, or, lw, sw and beq.<br><br>Let the processor execute:<br><code>and x24, x15, x21</code><br>at address <b>7204</b>. Suppose register xi = <b>30i</b> for i=1,...,31. Suppose memory[M] = <b>M + 640</b>.",
      "fields": [
        {
          "id": "q6_RegWrite",
          "label": "RegWrite",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q6_ALUSrc",
          "label": "ALUSrc",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q6_MemWrite",
          "label": "MemWrite",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q6_MemtoReg",
          "label": "MemtoReg",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q6_MemRead",
          "label": "MemRead",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q6_Branch",
          "label": "Branch",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q6_ALUOp",
          "label": "ALUOp",
          "answers": [
            "10"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q6_O",
          "label": "O",
          "answers": [
            "0000"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0000"
        },
        {
          "id": "q6_Zero",
          "label": "Zero",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q6_A",
          "label": "A",
          "answers": [
            "7204"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "7204"
        },
        {
          "id": "q6_B",
          "label": "B",
          "answers": [
            "0x0157FC33"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0x0157FC33"
        },
        {
          "id": "q6_C",
          "label": "C",
          "answers": [
            "01111"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01111"
        },
        {
          "id": "q6_D",
          "label": "D",
          "answers": [
            "10101"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10101"
        },
        {
          "id": "q6_E",
          "label": "E",
          "answers": [
            "11000"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "11000"
        },
        {
          "id": "q6_F",
          "label": "F",
          "answers": [
            "0110011"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0110011"
        },
        {
          "id": "q6_G",
          "label": "G",
          "answers": [
            "0"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q6_H",
          "label": "H",
          "answers": [
            "7208"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "7208"
        },
        {
          "id": "q6_I",
          "label": "I",
          "answers": [
            "450"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "450"
        },
        {
          "id": "q6_J",
          "label": "J",
          "answers": [
            "630"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "630"
        },
        {
          "id": "q6_K",
          "label": "K",
          "answers": [
            "66"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "66"
        },
        {
          "id": "q6_L",
          "label": "L",
          "answers": [
            "630"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "630"
        },
        {
          "id": "q6_M",
          "label": "M",
          "answers": [
            "?"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "?"
        },
        {
          "id": "q6_N",
          "label": "N",
          "answers": [
            "66"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "66"
        },
        {
          "id": "q6_P",
          "label": "P",
          "answers": [
            "7204"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "7204"
        },
        {
          "id": "q6_Q",
          "label": "Q",
          "answers": [
            "7208"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "7208"
        },
        {
          "id": "q6_R",
          "label": "R",
          "answers": [
            "7204"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "7204"
        }
      ],
      "solution": "x15 = 450 and x21 = 630. K = 450 AND 630 = 66. Encoding = 0x0157FC33."
    },
    {
      "id": "q7",
      "type": "access_table",
      "points": 10,
      "title": "Fully associative cache với true LRU",
      "prompt": "Assume the main memory is <b>word addressing</b> with <b>8-bit addresses</b> and the cache is a <b>fully associative cache</b> with <b>2-word blocks</b> and a total size of <b>12 words</b>. Assume one word is <b>32 bits</b>.<br><br>For the sequence below, use true LRU. For each reference, identify binary address, tag, and hit/miss.<br><br>Sequence of word addresses:<br><code>0x02, 0x11, 0x18, 0x2b, 0x03, 0x31, 0x19, 0x42, 0x2a, 0x43, 0x52, 0x10, 0x60, 0x53</code>",
      "columns": [
        "Word Address in Hex",
        "Word Address in Binary",
        "Tag in Binary",
        "Hit or Miss"
      ],
      "rows": [
        {
          "addr": "0x02",
          "cells": [
            {
              "id": "q7_0_bin",
              "label": "Word address in binary",
              "answers": [
                "00000010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00000010"
            },
            {
              "id": "q7_0_tag",
              "label": "Tag in binary",
              "answers": [
                "0000001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0000001"
            },
            {
              "id": "q7_0_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x11",
          "cells": [
            {
              "id": "q7_1_bin",
              "label": "Word address in binary",
              "answers": [
                "00010001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00010001"
            },
            {
              "id": "q7_1_tag",
              "label": "Tag in binary",
              "answers": [
                "0001000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0001000"
            },
            {
              "id": "q7_1_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x18",
          "cells": [
            {
              "id": "q7_2_bin",
              "label": "Word address in binary",
              "answers": [
                "00011000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00011000"
            },
            {
              "id": "q7_2_tag",
              "label": "Tag in binary",
              "answers": [
                "0001100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0001100"
            },
            {
              "id": "q7_2_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x2b",
          "cells": [
            {
              "id": "q7_3_bin",
              "label": "Word address in binary",
              "answers": [
                "00101011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00101011"
            },
            {
              "id": "q7_3_tag",
              "label": "Tag in binary",
              "answers": [
                "0010101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0010101"
            },
            {
              "id": "q7_3_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x03",
          "cells": [
            {
              "id": "q7_4_bin",
              "label": "Word address in binary",
              "answers": [
                "00000011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00000011"
            },
            {
              "id": "q7_4_tag",
              "label": "Tag in binary",
              "answers": [
                "0000001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0000001"
            },
            {
              "id": "q7_4_hm",
              "label": "Hit/Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        },
        {
          "addr": "0x31",
          "cells": [
            {
              "id": "q7_5_bin",
              "label": "Word address in binary",
              "answers": [
                "00110001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00110001"
            },
            {
              "id": "q7_5_tag",
              "label": "Tag in binary",
              "answers": [
                "0011000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0011000"
            },
            {
              "id": "q7_5_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x19",
          "cells": [
            {
              "id": "q7_6_bin",
              "label": "Word address in binary",
              "answers": [
                "00011001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00011001"
            },
            {
              "id": "q7_6_tag",
              "label": "Tag in binary",
              "answers": [
                "0001100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0001100"
            },
            {
              "id": "q7_6_hm",
              "label": "Hit/Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        },
        {
          "addr": "0x42",
          "cells": [
            {
              "id": "q7_7_bin",
              "label": "Word address in binary",
              "answers": [
                "01000010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01000010"
            },
            {
              "id": "q7_7_tag",
              "label": "Tag in binary",
              "answers": [
                "0100001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0100001"
            },
            {
              "id": "q7_7_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x2a",
          "cells": [
            {
              "id": "q7_8_bin",
              "label": "Word address in binary",
              "answers": [
                "00101010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00101010"
            },
            {
              "id": "q7_8_tag",
              "label": "Tag in binary",
              "answers": [
                "0010101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0010101"
            },
            {
              "id": "q7_8_hm",
              "label": "Hit/Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        },
        {
          "addr": "0x43",
          "cells": [
            {
              "id": "q7_9_bin",
              "label": "Word address in binary",
              "answers": [
                "01000011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01000011"
            },
            {
              "id": "q7_9_tag",
              "label": "Tag in binary",
              "answers": [
                "0100001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0100001"
            },
            {
              "id": "q7_9_hm",
              "label": "Hit/Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        },
        {
          "addr": "0x52",
          "cells": [
            {
              "id": "q7_10_bin",
              "label": "Word address in binary",
              "answers": [
                "01010010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01010010"
            },
            {
              "id": "q7_10_tag",
              "label": "Tag in binary",
              "answers": [
                "0101001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0101001"
            },
            {
              "id": "q7_10_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x10",
          "cells": [
            {
              "id": "q7_11_bin",
              "label": "Word address in binary",
              "answers": [
                "00010000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00010000"
            },
            {
              "id": "q7_11_tag",
              "label": "Tag in binary",
              "answers": [
                "0001000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0001000"
            },
            {
              "id": "q7_11_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x60",
          "cells": [
            {
              "id": "q7_12_bin",
              "label": "Word address in binary",
              "answers": [
                "01100000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01100000"
            },
            {
              "id": "q7_12_tag",
              "label": "Tag in binary",
              "answers": [
                "0110000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0110000"
            },
            {
              "id": "q7_12_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x53",
          "cells": [
            {
              "id": "q7_13_bin",
              "label": "Word address in binary",
              "answers": [
                "01010011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01010011"
            },
            {
              "id": "q7_13_tag",
              "label": "Tag in binary",
              "answers": [
                "0101001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0101001"
            },
            {
              "id": "q7_13_hm",
              "label": "Hit/Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        }
      ],
      "fields_extra": [
        {
          "id": "q7_full",
          "label": "After these accesses, is the cache full?",
          "answers": [
            "yes",
            "y",
            "có",
            "co"
          ],
          "type": "text",
          "unit": "",
          "hint": "",
          "show": "yes"
        },
        {
          "id": "q7_repl",
          "label": "How many replacements occurred?",
          "answers": [
            "3"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "3"
        }
      ],
      "solution": "2-word blocks => offset = 1 bit(s) and tag = upper 7 bits. Hit/Miss sequence: M, M, M, M, H, M, H, M, H, H, M, M, M, H. Cache full: yes. Replacements: 3."
    },
    {
      "id": "q8",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: sw",
      "image": "single_cycle_datapath",
      "prompt": "Consider a single-cycle RISC-V processor with add, sub, and, or, lw, sw and beq.<br><br>Let the processor execute:<br><code>sw x16, -28(x18)</code><br>at address <b>8300</b>. Suppose register xi = <b>26i</b> for i=1,...,31. Suppose memory[M] = <b>M + 910</b>.",
      "fields": [
        {
          "id": "q8_RegWrite",
          "label": "RegWrite",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q8_ALUSrc",
          "label": "ALUSrc",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q8_MemWrite",
          "label": "MemWrite",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q8_MemtoReg",
          "label": "MemtoReg",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q8_MemRead",
          "label": "MemRead",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q8_Branch",
          "label": "Branch",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q8_ALUOp",
          "label": "ALUOp",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q8_O",
          "label": "O",
          "answers": [
            "0010"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0010"
        },
        {
          "id": "q8_Zero",
          "label": "Zero",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q8_A",
          "label": "A",
          "answers": [
            "8300"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "8300"
        },
        {
          "id": "q8_B",
          "label": "B",
          "answers": [
            "0xFF092223"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0xFF092223"
        },
        {
          "id": "q8_C",
          "label": "C",
          "answers": [
            "10010"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10010"
        },
        {
          "id": "q8_D",
          "label": "D",
          "answers": [
            "10000"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10000"
        },
        {
          "id": "q8_E",
          "label": "E",
          "answers": [
            "00100"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00100"
        },
        {
          "id": "q8_F",
          "label": "F",
          "answers": [
            "0100011"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0100011"
        },
        {
          "id": "q8_G",
          "label": "G",
          "answers": [
            "-56"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "-56"
        },
        {
          "id": "q8_H",
          "label": "H",
          "answers": [
            "8304"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "8304"
        },
        {
          "id": "q8_I",
          "label": "I",
          "answers": [
            "468"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "468"
        },
        {
          "id": "q8_J",
          "label": "J",
          "answers": [
            "-28"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "-28"
        },
        {
          "id": "q8_K",
          "label": "K",
          "answers": [
            "440"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "440"
        },
        {
          "id": "q8_L",
          "label": "L",
          "answers": [
            "416"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "416"
        },
        {
          "id": "q8_M",
          "label": "M",
          "answers": [
            "?"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "?"
        },
        {
          "id": "q8_N",
          "label": "N",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q8_P",
          "label": "P",
          "answers": [
            "8300"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "8300"
        },
        {
          "id": "q8_Q",
          "label": "Q",
          "answers": [
            "8304"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "8304"
        },
        {
          "id": "q8_R",
          "label": "R",
          "answers": [
            "8244"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "8244"
        }
      ],
      "solution": "x18 = 468 and x16 = 416. Effective address = 468 - 28 = 440. Store data = 416. Encoding = 0xFF092223."
    },
    {
      "id": "q9",
      "type": "fields",
      "points": 10,
      "title": "Execution time: single-cycle vs pipeline",
      "prompt": "Consider the following sequence of 32-bit RISC-V instructions:<br><pre>add x20, x1, x2\nsub x21, x20, x3\nlw  x22, 0(x21)\nand x23, x22, x20\nor x24, x23, x21\nsw  x24, 12(x20)</pre>a) Single-cycle processor clock cycle time = <b>1000 ps</b>.<br>b) 5-stage pipelined processor clock cycle time = <b>250 ps</b>, without forwarding or hazard detection units. Insert NOPs to ensure correct execution.<br>c) 5-stage pipelined processor clock cycle time = <b>250 ps</b>, with forwarding/hazard detection units.<br>d) Which case gives the medium performance?",
      "fields": [
        {
          "id": "q9_a",
          "label": "a) Execution time on single-cycle processor",
          "answers": [
            "6000"
          ],
          "type": "decimal",
          "unit": "ps",
          "hint": "",
          "show": "6000"
        },
        {
          "id": "q9_b_nop",
          "label": "b) Number of inserted NOPs",
          "answers": [
            "10"
          ],
          "type": "decimal",
          "unit": "NOPs",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q9_b_cycles",
          "label": "b) Number of cycles after inserting NOPs",
          "answers": [
            "20"
          ],
          "type": "decimal",
          "unit": "cycles",
          "hint": "",
          "show": "20"
        },
        {
          "id": "q9_b_time",
          "label": "b) Execution time without forwarding/hazard detection",
          "answers": [
            "5000"
          ],
          "type": "decimal",
          "unit": "ps",
          "hint": "",
          "show": "5000"
        },
        {
          "id": "q9_c_stall",
          "label": "c) Number of stalls/NOPs needed with forwarding/hazard detection",
          "answers": [
            "1"
          ],
          "type": "decimal",
          "unit": "stalls",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_c_cycles",
          "label": "c) Number of cycles",
          "answers": [
            "11"
          ],
          "type": "decimal",
          "unit": "cycles",
          "hint": "",
          "show": "11"
        },
        {
          "id": "q9_c_time",
          "label": "c) Execution time with forwarding/hazard detection",
          "answers": [
            "2750"
          ],
          "type": "decimal",
          "unit": "ps",
          "hint": "",
          "show": "2750"
        },
        {
          "id": "q9_d",
          "label": "d) Medium performance case",
          "answers": [
            "b",
            "case b",
            "b)",
            "pipeline without forwarding",
            "without forwarding"
          ],
          "type": "text",
          "unit": "",
          "hint": "",
          "show": "b"
        }
      ],
      "solution": "Single-cycle: 6×1000 = 6000 ps. Without forwarding/hazard detection: 10 NOPs => 16 instructions including NOPs => 20 cycles => 5000 ps. With forwarding/hazard detection: 1 load-use stall(s) => 11 cycles => 2750 ps. The medium performance is case b."
    },
    {
      "id": "q10",
      "type": "fields",
      "points": 10,
      "title": "Cache parameters: 2-way set associative, write-back",
      "prompt": "Here is the cache with the following key characteristics:<br>■ <b>2-Way Set Associative Cache</b><br>■ Write policy: <b>Write-back using write allocate</b> with one Dirty bit per block<br>■ Block size is <b>16 bytes</b><br>■ Cache size is <b>64 KB</b><br>■ Memory is byte addressing with <b>32-bit addresses</b>.<br><br>Fill in the following values.",
      "fields": [
        {
          "id": "q10_index",
          "label": "Set index",
          "answers": [
            "11"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "11"
        },
        {
          "id": "q10_offset",
          "label": "Block offset",
          "answers": [
            "4"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "4"
        },
        {
          "id": "q10_tag",
          "label": "Tag size for a block",
          "answers": [
            "17"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "17"
        },
        {
          "id": "q10_blocks",
          "label": "Number of blocks",
          "answers": [
            "4096"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "4096"
        },
        {
          "id": "q10_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "602112"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "602112"
        }
      ],
      "solution": "Blocks = 64KB/16B = 4096. Sets = 4096/2 = 2048, so index = 11 bits. Offset = log2(16) = 4 bits. Tag = 32 - 11 - 4 = 17 bits. Total = 4096 × (16×8 + 17 tag + 1 valid + 1 dirty) = 602112 bits."
    }
  ]
});
