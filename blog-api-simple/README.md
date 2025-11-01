Simple Blog API + Frontend (Express 8080)

Yêu cầu đề bài
- Backend Node/Express chạy port 8080.
- Có 2 API: trả danh sách blog và chi tiết bài viết theo id/slug.
- Bài viết được hardcode ở phía server (file posts.js).
- Frontend gọi API (không hardcode dữ liệu).
- Up code lên CodeSandbox và nộp link.

Cách chạy cục bộ
1) cài:  npm install
2) chạy: npm start
   server sẽ lắng nghe tại http://localhost:8080
   API:  GET /api/posts
         GET /api/posts/:idOrSlug
   Frontend: mở http://localhost:8080 (được serve từ thư mục public)

Hướng dẫn nhanh up lên CodeSandbox
Cách A: Upload file .zip
- Tải file blog-api-simple.zip (đính kèm).
- Vào https://codesandbox.io -> Create -> Import -> Upload .zip -> chọn file này.
- Đợi packages cài xong, khu vực "Server" sẽ hiển thị link preview.
- Nếu CodeSandbox yêu cầu đổi cổng, vẫn để PORT = process.env.PORT || 8080 (tương thích).

Cách B: Tạo mới sandbox Node
- Create -> Node.js
- Tạo các file: package.json, server.js, posts.js và thư mục public/index.html như repo này.
- Add Dependencies: express, cors, morgan
- Nhấn "Start" để chạy. Preview sẽ hiện ở khung phải.

Test API (curl)
- Danh sách:  curl https://<your-sbx>/api/posts
- Chi tiết:   curl https://<your-sbx>/api/posts/hello-world
              curl https://<your-sbx>/api/posts/1

Tích hợp với React (tuỳ chọn)
- Nếu bạn có frontend React riêng (Vite/CRA), chỉ cần gọi fetch('https://<server>/api/posts') và
  fetch('https://<server>/api/posts/:slug'). Nếu chạy cùng domain, dùng fetch('/api/posts').
