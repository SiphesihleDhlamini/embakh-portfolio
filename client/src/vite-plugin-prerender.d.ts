// src/vite-plugin-prerender.d.ts
declare module 'vite-plugin-prerender' {
  import { Plugin } from 'vite';
  interface PrerenderOptions {
    staticDir: string;
    routes: string[];
  }
  export default function prerender(options: PrerenderOptions): Plugin;
}