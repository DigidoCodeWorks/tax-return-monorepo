import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'Skattframtal | Ísland.is',
  description: 'Skil á skattframtali einstaklings á Ísland.is',
  openGraph: {
    title: 'Skattframtal | Ísland.is',
    description: 'Skil á skattframtali einstaklings á Ísland.is',
    url: 'https://island.is',
    siteName: 'Ísland.is',
    locale: 'is_IS',
    type: 'website',
  },
};

export const loginMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Innskráning | Ísland.is',
  description: 'Skráðu þig inn til að skila skattframtali á Ísland.is',
};

export const myPagesMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Mínar síður | Ísland.is',
  description: 'Yfirlit yfir umsóknir, framtöl og skjöl þín á Ísland.is',
};

export const informationMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Upplýsingasíða um framtöl | Ísland.is',
  description:
    'Hér finnur þú upplýsingar um framtal einstaklinga og hvernig skila á því.',
};

export const taxReturnsMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Skattframtöl | Ísland.is',
  description: 'Yfirlit yfir framtöl, bæði í vinnslu og fyrri ára.',
};

export const taxFormFlowMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Skattframtal - Skrefin | Ísland.is',
  description: 'Fylltu út framtalið þitt í nokkrum skrefum á Ísland.is',
};

export const inProgressMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Framtöl í vinnslu | Ísland.is',
  description: 'Framtöl sem eru í vinnslu og ekki enn skilað inn.',
};

export const previousReturnsMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Framtöl fyrri ára | Ísland.is',
  description: 'Yfirlit yfir framtöl sem hafa verið skilað á undanförnum árum.',
};

export const stepMetadata = {
  1: {
    ...defaultMetadata,
    title: 'Skattframtal – Skref 1: Upplýsingar | Ísland.is',
    description: 'Fylltu út almennar upplýsingar um framtal ársins.',
  },
  2: {
    ...defaultMetadata,
    title: 'Skattframtal – Skref 2: Tekjur ársins | Ísland.is',
    description: 'Skráðu tekjur ársins sem hluta af framtalinu þínu.',
  },
  3: {
    ...defaultMetadata,
    title: 'Skattframtal – Skref 3: Fjármagnstekjur | Ísland.is',
    description: 'Skráðu fjármagnstekjur í framtalið þitt.',
  },
  4: {
    ...defaultMetadata,
    title: 'Skattframtal – Skref 4: Eignir | Ísland.is',
    description: 'Færðu inn upplýsingar um eignir sem þú átt.',
  },
  5: {
    ...defaultMetadata,
    title: 'Skattframtal – Skref 5: Skuldir og vextir | Ísland.is',
    description: 'Skráðu skuldir og greidda vexti í framtalið.',
  },
  6: {
    ...defaultMetadata,
    title: 'Skattframtal – Skref 6: Samantekt | Ísland.is',
    description: 'Yfirlit og samantekt á innsendingu skattframtals.',
  },
};
