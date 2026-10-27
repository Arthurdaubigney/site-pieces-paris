import vatican2007 from '../assets/photos/2-2007.png';
import chirac from '../assets/photos/2-euro-chirac.jpg';
import sidaction from '../assets/photos/2-euro-gedenkmunze-aids-gedenkmunze-frankreich-sidaction.jpg';
import andorra from '../assets/photos/andorra2017pyrenaen.jpg';
import collection from '../assets/photos/coin-collection.jpg';
import magnifier from '../assets/photos/dfc-4172-a-handheld-magnifying-glass-resting.jpg';
import ultramacro from '../assets/photos/eurocent-ultramacro.jpg';
import lt2020 from '../assets/photos/lt-2-2020-colline-des-croix.png';
import lt2021 from '../assets/photos/lt-2-2021-dzukija.png';
import macro from '../assets/photos/macro-d-une-piece-de-2-euros.jpg';
import sm2004 from '../assets/photos/moeda-comemorativa-2-euros-2004-san-marino.png';
import vat2004 from '../assets/photos/moeda-comemorativa-2-euros-2004-vaticano.png';
import pile from '../assets/photos/piece-2-euros-commemorative.jpg';
import sm2011 from '../assets/photos/sanmarinska-2-eurova-minca.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  title: string;
}

export const photos = {
  vatican2007: { src: vatican2007, alt: 'Pièce de 2 € du Vatican 2007 à l’effigie de Benoît XVI, bimétallique, vue de face', title: 'Pièce de 2 euros Vatican 2007, Benoît XVI' },
  sm2004: { src: sm2004, alt: 'Pièce commémorative de 2 € de Saint-Marin 2004 portrait de Bartolomeo Borghesi', title: 'Pièce de 2 euros Saint-Marin 2004, Bartolomeo Borghesi' },
  vat2004: { src: vat2004, alt: 'Pièce commémorative de 2 € du Vatican 2004, 75 ans de l’État de la Cité du Vatican', title: 'Pièce de 2 euros commémorative Vatican 2004' },
  lt2020: { src: lt2020, alt: 'Pièce commémorative de 2 € de Lituanie 2020 représentant la Colline des Croix', title: 'Pièce de 2 euros Lituanie 2020, Colline des Croix' },
  lt2021: { src: lt2021, alt: 'Pièce commémorative de 2 € de Lituanie 2021 aux armes de la région de Dzūkija', title: 'Pièce de 2 euros Lituanie 2021, Dzūkija' },
  chirac: { src: chirac, alt: 'Pièce commémorative française de 2 € 2022 à l’effigie de Jacques Chirac', title: 'Pièce de 2 euros commémorative France 2022, Jacques Chirac' },
  andorra: { src: andorra, alt: 'Pièce commémorative de 2 € d’Andorre 2017 « Andorra, el país dels Pirineus »', title: 'Pièce de 2 euros Andorre 2017' },
  sm2011: { src: sm2011, alt: 'Pièce de 2 € de Saint-Marin 2011 représentant le Palazzo Pubblico', title: 'Pièce de 2 euros Saint-Marin 2011, Palazzo Pubblico' },
  sidaction: { src: sidaction, alt: 'Coffret Belle Épreuve de la pièce commémorative française de 2 € Sidaction 2014, avec son écrin et son certificat', title: 'Coffret BE 2 euros commémorative France Sidaction 2014' },
  pile: { src: pile, alt: 'Plusieurs pièces commémoratives de 2 € étalées sur une table, aux motifs différents', title: 'Pièces de 2 euros commémoratives de pays différents' },
  macro: { src: macro, alt: 'Gros plan macro sur le liseré d’une pièce de 2 € bimétallique, avec la mention UEM', title: 'Macro d’une pièce de 2 euros : tranche et liseré' },
  ultramacro: { src: ultramacro, alt: 'Gros plan sur le millésime 2002 embossé sur une pièce euro, éclairage rasant cuivré', title: 'Millésime 2002 en gros plan sur une pièce euro' },
  magnifier: { src: magnifier, alt: 'Loupe de numismate posée sur un lot de monnaies et médailles anciennes', title: 'Loupe de numismate sur un lot de monnaies' },
  collection: { src: collection, alt: 'Album de collection de pièces ouvert, entouré de monnaies, capsules et alvéoles de rangement', title: 'Album de collection et capsules de pièces' },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
