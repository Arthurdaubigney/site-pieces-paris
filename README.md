# Numisma Paris — site d'estimation et de rachat de pièces de 2 €

Site statique multi-pages (Astro) : estimation gratuite et rachat de pièces de 2 € rares et commémoratives.

## Démarrer
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/ (images optimisées en WebP, sitemap, JSON-LD)
```

## À compléter avant la mise en ligne
1. **Formulaire Tally** : copier `.env.example` en `.env` et renseigner `PUBLIC_TALLY_FORM_ID` (la fin de l'URL `tally.so/r/<ID>`), ou le mettre dans `src/config/site.ts`. Composant : `src/components/TallyForm.astro`. Les paramètres d'URL `?pays=…&type=…` sont transmis : créer des champs masqués Tally `pays` et `type`.
2. **Identité** dans `src/config/site.ts` : nom, raison sociale, SIRET, e-mail, téléphone, domaine (aussi dans `astro.config.mjs` et `public/robots.txt`).
3. **Contenus d'exemple** à valider : étapes du bordereau, modalités de paiement, FAQ, exemples de pièces (`src/data`).
4. Ajouter `public/og.png` (1200×630) pour les partages sociaux.

## Structure
- `src/pages` : accueil, pièces recherchées, estimation gratuite, rachat, guide, expertise, FAQ, mentions légales.
- `src/components` : Header, Footer, TallyForm, CtaLink, Checker (vérificateur), Process, Faq, LotTiles…
- `src/data` : pièces, FAQ, images (alt/title), crédits.
- Images : Wikimedia Commons (crédits dans `src/data/credits.json` et page mentions légales).
