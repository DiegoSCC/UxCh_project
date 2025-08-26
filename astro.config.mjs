import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ux-ch-project.vercel.app/',
  vite: {
    plugins: [tailwindcss()],
  },
});