import { cp, mkdir } from 'node:fs/promises';
// Keep the hosting root and GitHub Pages configuration unchanged.
await mkdir('assets', { recursive: true });
await cp('dist/assets', 'assets', { recursive: true });
await cp('dist/index.html', 'index.html');
console.log('Static release copied to the repository root.');
