import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpeg: { quality: 85, mozjpeg: true },
      jpg:  { quality: 85, mozjpeg: true },
      webp: { quality: 85 },
      // Strip ALL metadata (EXIF, GPS, camera info, timestamps) from images
      png:  { quality: 85 },
    }),
  ],
  base: '/',
  build: {
    // Disable source maps in production — prevents source code exposure
    sourcemap: false,
  },
})
