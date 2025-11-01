import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './posts.js';

const app = express();
const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Helpers
function findPost(param) {
  // try numeric id first
  const maybeId = Number(param);
  if (!Number.isNaN(maybeId)) {
    return posts.find(p => p.id === maybeId);
  }
  // else treat as slug
  return posts.find(p => p.slug === String(param));
}

// Routes
app.get('/api/posts', (req, res) => {
  const list = posts.map(({ id, slug, title, date, excerpt }) => ({
    id, slug, title, date, excerpt
  }));
  res.json(list);
});

app.get('/api/posts/:idOrSlug', (req, res) => {
  const post = findPost(req.params.idOrSlug);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// Serve the simple frontend (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html (hash routing on the client)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
