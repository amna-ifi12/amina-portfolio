import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON with generous limit for base64 images
  app.use(express.json({ limit: '25mb' }));

  // API Route: Check if permanent portrait exists
  app.get('/api/has-permanent-photo', (_req, res) => {
    const filePath = path.join(process.cwd(), 'public', 'amina-portrait.png');
    if (fs.existsSync(filePath)) {
      res.json({ exists: true, url: `/amina-portrait.png?v=${fs.statSync(filePath).mtimeMs}` });
    } else {
      res.json({ exists: false });
    }
  });

  // API Route: Permanently save uploaded photo to disk
  app.post('/api/save-photo', (req, res) => {
    try {
      const { image } = req.body;
      if (!image || typeof image !== 'string') {
        return res.status(400).json({ error: 'No image data provided' });
      }

      // Match base64 data uri
      const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      let buffer: Buffer;
      if (matches && matches.length === 3) {
        buffer = Buffer.from(matches[2], 'base64');
      } else {
        buffer = Buffer.from(image, 'base64');
      }

      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      const filePath = path.join(publicDir, 'amina-portrait.png');
      fs.writeFileSync(filePath, buffer);

      console.log('Successfully saved permanent photo to', filePath);
      return res.json({ success: true, url: `/amina-portrait.png?v=${Date.now()}` });
    } catch (err: any) {
      console.error('Error saving photo:', err);
      return res.status(500).json({ error: err.message || 'Failed to save photo' });
    }
  });

  // Contact form submission endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, service, message } = req.body;
    console.log(`Inquiry received from ${name} (${email}) for ${service}: ${message}`);
    return res.json({ success: true, message: 'Inquiry received' });
  });

  // In development, mount Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve built static files from dist
    app.use(express.static(path.join(process.cwd(), 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
