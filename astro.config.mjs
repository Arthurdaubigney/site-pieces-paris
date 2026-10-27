import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Remplacer par le domaine de production avant la mise en ligne.
export default defineConfig({
  site: 'https://www.pieces-2-euros-paris.fr',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
