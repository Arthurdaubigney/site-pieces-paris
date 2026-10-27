import type { PhotoKey } from './images';

export interface Lot {
  photo: PhotoKey;
  country: string;
  year: string;
  kind: string;
  subject: string;
  interest: string;
}

/** Pièces présentées comme des lots de catalogue. Exemples d'illustration : aucune cote n'est affichée. */
export const lots: Lot[] = [
  { photo: 'vatican2007', country: 'Vatican', year: '2007', kind: 'Courante', subject: 'Benoît XVI', interest: 'Très recherchée' },
  { photo: 'sm2004', country: 'Saint-Marin', year: '2004', kind: 'Commémorative', subject: 'Bartolomeo Borghesi', interest: 'Très recherchée' },
  { photo: 'vat2004', country: 'Vatican', year: '2004', kind: 'Commémorative', subject: '75 ans de l’État', interest: 'Très recherchée' },
  { photo: 'andorra', country: 'Andorre', year: '2017', kind: 'Commémorative', subject: 'Le pays des Pyrénées', interest: 'Recherchée' },
  { photo: 'chirac', country: 'France', year: '2022', kind: 'Commémorative', subject: 'Jacques Chirac', interest: 'Selon l’état' },
  { photo: 'lt2020', country: 'Lituanie', year: '2020', kind: 'Commémorative', subject: 'Colline des Croix', interest: 'Selon l’état' },
  { photo: 'lt2021', country: 'Lituanie', year: '2021', kind: 'Commémorative', subject: 'Région de Dzūkija', interest: 'Selon l’état' },
  { photo: 'sidaction', country: 'France', year: '2014', kind: 'Coffret BE', subject: 'Sidaction, avec écrin', interest: 'Recherchée' },
];

/** Feuille de catalogue : ce que nous achetons, par famille. */
export const sheet = [
  {
    name: 'Les micro-États',
    items: [
      { n: 'Monaco, toutes années, dont 2007 (20 001 exemplaires)', v: 'Très recherchée' },
      { n: 'Vatican, séries courantes et commémoratives', v: 'Très recherchée' },
      { n: 'Saint-Marin, séries courantes et commémoratives', v: 'Très recherchée' },
      { n: 'Andorre, depuis 2014', v: 'Recherchée' },
    ],
  },
  {
    name: 'Les commémoratives',
    items: [
      { n: 'Commémoratives nationales à faible tirage', v: 'Recherchée' },
      { n: 'Commémoratives communes de la zone euro', v: 'Selon l’état' },
      { n: 'Premières émissions de chaque pays', v: 'Recherchée' },
    ],
  },
  {
    name: 'Variantes et défauts',
    items: [
      { n: 'Variantes de face nationale, dont Grèce 2002 lettre S', v: 'Recherchée' },
      { n: 'Défauts de frappe : décentrage, coin fêlé, tranche', v: 'Selon l’état' },
    ],
  },
  {
    name: 'Coffrets et séries',
    items: [
      { n: 'Coffrets Belle Épreuve et Brillant Universel', v: 'Recherchée' },
      { n: 'Rouleaux scellés et séries annuelles complètes', v: 'Selon l’état' },
    ],
  },
];
