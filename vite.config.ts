import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.RAWG_KEY': JSON.stringify(env.RAWG_KEY),
    },
    plugins: [react()],
  };
});
