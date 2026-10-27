export type Tier = 'priority' | 'notable' | 'common';

export const countries: { name: string; tier: Tier }[] = [
  { name: 'Monaco', tier: 'priority' },
  { name: 'Vatican', tier: 'priority' },
  { name: 'Saint-Marin', tier: 'priority' },
  { name: 'Andorre', tier: 'priority' },
  { name: 'Chypre', tier: 'notable' },
  { name: 'Estonie', tier: 'notable' },
  { name: 'Finlande', tier: 'notable' },
  { name: 'Grèce', tier: 'notable' },
  { name: 'Lettonie', tier: 'notable' },
  { name: 'Lituanie', tier: 'notable' },
  { name: 'Luxembourg', tier: 'notable' },
  { name: 'Malte', tier: 'notable' },
  { name: 'Slovaquie', tier: 'notable' },
  { name: 'Slovénie', tier: 'notable' },
  { name: 'Allemagne', tier: 'common' },
  { name: 'Autriche', tier: 'common' },
  { name: 'Belgique', tier: 'common' },
  { name: 'Croatie', tier: 'common' },
  { name: 'Espagne', tier: 'common' },
  { name: 'France', tier: 'common' },
  { name: 'Irlande', tier: 'common' },
  { name: 'Italie', tier: 'common' },
  { name: 'Pays-Bas', tier: 'common' },
  { name: 'Portugal', tier: 'common' },
];

export const kinds = [
  { id: 'commemorative', label: 'Commémorative' },
  { id: 'courante', label: 'Courante' },
  { id: 'coffret', label: 'Coffret' },
] as const;
