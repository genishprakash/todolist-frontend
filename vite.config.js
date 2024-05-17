import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  define: {
    'process.env.url': `"${process.env.url}"`,
  },
  server: {
    port: 3000,
  }
});
