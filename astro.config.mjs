import { defineConfig } from 'astro/config';

export default defineConfig({
  routes:{
    '/api-books/:id': './src/pages/api-books/[id].astro',
  }
});