import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
     base: '/meuWebPortfolio/',  // nome exato do meu repositório
     plugins: [react()],
});


