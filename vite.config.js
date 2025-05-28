import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Importing the Tailwind CSS plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), // Using the React plugin 
    tailwindcss(), // Using the Tailwind CSS plugin
  ],
})
