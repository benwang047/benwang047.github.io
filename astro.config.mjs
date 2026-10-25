import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ site: process.env.SITE_URL || 'https://benwang047.github.io', output: 'static', vite: { plugins: [tailwindcss()], server: { allowedHosts: ['terminal.local'] } } });
