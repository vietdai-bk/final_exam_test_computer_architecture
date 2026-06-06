# RISC-V Exam Practice Project

Project luyện đề Computer Organization/RISC-V chạy bằng HTML/CSS/JS thuần.

## Cách chạy

Mở `index.html` trực tiếp bằng trình duyệt. Nếu trình duyệt chặn một số file local, chạy server tĩnh:

```bash
cd riscv_exam_project
python -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## Cấu trúc

```text
riscv_exam_project/
├── index.html
├── css/style.css
├── js/app.js
├── js/assets.js
├── assets/
│   ├── single_cycle_datapath.png
│   └── pipeline_datapath.png
├── exams/
│   ├── index.js
│   ├── exam_01.js
│   ├── exam_01.json
│   └── exam_template.js
└── tools/rebuild_exam_index.py
```

## Thêm đề mới mà không sửa HTML

Cách 1: đề xuất dùng cho dropdown cố định.

1. Copy `exams/exam_template.js` thành `exams/exam_02.js`.
2. Sửa nội dung đề trong `exam_02.js`.
3. Chạy:

```bash
python tools/rebuild_exam_index.py
```

File `index.html` không cần sửa.

Cách 2: nạp nhanh một đề ngoài.

Tạo file JSON theo cấu trúc giống `exams/exam_01.json`, mở web rồi bấm **Nạp đề JSON ngoài**.

## Kiểu câu hỏi đang hỗ trợ

- `fields`: câu điền nhiều ô đáp án.
- `access_table`: bảng cache/hit-miss/way. Một ô bảng có thể chứa nhiều input bằng cách khai báo mảng field.
- `datapath`: câu single-cycle datapath có ảnh mạch và bảng signal.
- `pipeline`: câu pipeline A-G theo cycle.

## Field answer format

Một field cơ bản:

```js
{ id: "q1_a", label: "Set index", answers: ["10"], type: "decimal", unit: "bits", show: "10" }
```

`type` có thể là `decimal`, `binary`, `hex`, `symbol`, hoặc `text`.

## Cập nhật giao diện v3

- Ẩn hoàn toàn label đáp án trong các ô Way trước khi nộp bài.
- Đáp án đúng chỉ được đổ ra giao diện sau khi bấm **Nộp bài & check điểm**.
- Căn lại độ rộng bảng, nhất là câu 5 với các cột Way 0 / Way 1 / Way 2.
- Các ô binary, hex, decimal và `T(index)=tag` dùng font monospace để dễ kiểm tra bit.
- Các bảng dài được đặt trong vùng cuộn ngang để không làm tràn giao diện.
