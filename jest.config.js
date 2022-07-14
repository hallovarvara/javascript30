import path from 'path';
import { fileURLToPath } from 'url';

export default {
  collectCoverage: true,
  verbose: true,
  rootDir: '.',
  testEnvironment: 'jsdom',
  moduleDirectories: [
    'node_modules',
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'src'),
  ],
};
