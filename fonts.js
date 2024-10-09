

  import { Inter, Roboto_Mono, Montserrat } from '@next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})


// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 900

// .montserrat-<uniquifier> {
//     font-family: "Montserrat", sans-serif;
//     font-optical-sizing: auto;
//     font-weight: <weight>;
//     font-style: normal;
//   }