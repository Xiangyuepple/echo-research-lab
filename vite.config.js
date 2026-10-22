import { defineConfig } from 'vite';
export default defineConfig({base:'./',build:{rollupOptions:{output:{manualChunks:{animation:['gsap'],three:['three','@react-three/fiber','@react-three/drei']}}}}});
