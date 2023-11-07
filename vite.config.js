import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue'; // Importez le plugin Vue
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
    Vue(), // Ajoutez le plugin Vue à la liste des plugins
  ],
  build: {
    rollupOptions: {
      input: 'resources/js/app.js', // Utilisez le chemin complet de votre fichier JavaScript principal
    },
  },
});
