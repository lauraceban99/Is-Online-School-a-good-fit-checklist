import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    // 👇 ADD THIS SECTION (everything below this comment)
    build: {
      lib: {
        entry: 'widget.tsx',      // path to your widget entry file
        name: 'AIAQuizWidget',    // name for the global variable
        formats: ['iife'],        // make one single <script> file
        fileName: 'quiz-widget'   // output = dist/quiz-widget.iife.js
      },
      rollupOptions: {
        external: []              // keep dependencies bundled in
      }
    }
  };
});
