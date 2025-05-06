import localFont from 'next/font/local';
export const ibmPlexSans = localFont({
  src: [
    {
      path: '../../public/fonts/ibm-plex-sans/IBMPlexSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ibm-plex-sans/IBMPlexSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ibm-plex-sans/IBMPlexSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ibm-plex-sans/IBMPlexSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ibm-plex-sans/IBMPlexSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ibm-plex-sans/IBMPlexSans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ibm-plex-sans/IBMPlexSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ibm-plex-sans/IBMPlexSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-ibm',
  display: 'swap',
});
