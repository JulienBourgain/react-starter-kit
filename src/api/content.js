/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import { join } from 'path';
import { Router } from 'express';
import fs from '../utils/fs';

// A folder with Jade/Markdown/HTML content pages
const CONTENT_DIR = join(__dirname, './content');

// Extract 'front matter' metadata and generate HTML
const parse = (path, content) => {
  const htmlContent = content;
  return Object.assign({ path, content: htmlContent, component: 'ContentPage', title: 'Rox Cooper !' });
};

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const path = req.query.path;

    if (!path || path === 'undefined') {
      res.status(400).send({error: `The 'path' query parameter cannot be empty.`});
      return;
    }

    let fileName = join(CONTENT_DIR, (path === '/' ? '/index' : path) + '.html');
    if (!await fs.exists(fileName)) {
      fileName = join(CONTENT_DIR, path + '/index.html');
    }

    if (!await fs.exists(fileName)) {
      res.status(404).send({error: `The page '${path}' is not found.`});
    } else {
      const source = await fs.readFile(fileName, { encoding: 'utf8' });
      const content = parse(path, source);
      res.status(200).send(content);
    }
  } catch (err) {
    next(err);
  }
});

export default router;

