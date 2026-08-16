import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Egen domene (charlotteskramesto.no) betyr at siden ligger på roten.
  // Ligger den under et /repo-navn på github.io må denne endres.
  base: '/',
});
