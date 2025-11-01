const posts = [
  {
    id: 1,
    slug: 'hello-world',
    title: 'Hello World with Express',
    date: '2025-10-01',
    excerpt: 'Giới thiệu blog nhỏ chạy bằng Node/Express.',
    body: `
      Đây là bài viết đầu tiên. Nội dung được hardcode ở phía server.
      Bạn có thể sửa file posts.js để thêm/xoá/sửa bài viết tuỳ thích.
    `.trim()
  },
  {
    id: 2,
    slug: 'react-router-v6-notes',
    title: 'Ghi chú React Router v6',
    date: '2025-10-15',
    excerpt: 'Một vài ghi chú nhanh về Router v6.',
    body: `
      React Router v6 mang đến Routes, Route và hook useParams.
      Ở demo frontend này, chúng ta dùng hash #/post/:slug để điều hướng đơn giản.
    `.trim()
  },
  {
    id: 3,
    slug: 'codesandbox-tips',
    title: 'Mẹo dùng CodeSandbox',
    date: '2025-11-01',
    excerpt: 'Một số mẹo nhỏ khi dùng CodeSandbox với Node/Express.',
    body: `
      - Hãy để PORT = process.env.PORT || 8080 để tương thích.
      - Thêm morgan để log request, cors để gọi API từ frontend khác origin.
      - Bạn có thể upload .zip này lên CodeSandbox để tạo dự án nhanh.
    `.trim()
  }
];

export default posts;
