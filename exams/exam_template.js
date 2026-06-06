// Copy file này thành exam_02.js rồi sửa nội dung bên trong.
// Sau đó chạy: python tools/rebuild_exam_index.py
window.registerExam({
  id: "exam_02",
  title: "Đề luyện tập 02",
  description: "Mô tả ngắn của đề.",
  questions: [
    {
      id: "q1",
      type: "fields",
      points: 10,
      title: "Câu 1 - Ví dụ câu điền đáp án",
      prompt: "Nội dung câu hỏi ở đây.",
      fields: [
        { id: "q1_a", label: "Đáp án A", answers: ["10"], type: "decimal", unit: "bits", show: "10" }
      ],
      solution: "Giải thích ngắn ở đây."
    }
  ]
});
