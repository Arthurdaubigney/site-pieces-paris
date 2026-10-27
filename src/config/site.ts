/**
 * Configuration centrale du site : une seule source de vérité pour l'identité,
 * les coordonnées et le formulaire Tally. Tout ce qui est marqué "À COMPLÉTER"
 * doit être remplacé avant la mise en ligne.
 */
export const site = {
  name: 'Numisma Paris',
  legalName: 'À COMPLÉTER — raison sociale',
  tagline: 'Estimation et rachat de pièces de 2 € rares',
  url: 'https://www.pieces-2-euros-paris.fr',
  locale: 'fr_FR',
  email: 'contact@pieces-2-euros-paris.fr', // À COMPLÉTER
  phone: '', // À COMPLÉTER, ex. "+33 1 00 00 00 00" (laisser vide pour masquer)
  city: 'Paris',
  region: 'Île-de-France',
  siret: 'À COMPLÉTER',
  /** ID du formulaire Tally : variable d'env. PUBLIC_TALLY_FORM_ID, ou valeur en dur ici. */
  tallyFormId: (import.meta.env.PUBLIC_TALLY_FORM_ID as string | undefined) ?? '',
} as const;

export const tallyUrl = site.tallyFormId ? `https://tally.so/r/${site.tallyFormId}` : '';
/** Page qui porte le formulaire : toutes les CTA du site pointent ici. */
export const formPath = '/estimation-gratuite/';
