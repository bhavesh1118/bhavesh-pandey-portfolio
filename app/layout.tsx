import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({subsets:['latin'],variable:'--font-inter',display:'swap'});
const jetbrains = JetBrains_Mono({subsets:['latin'],variable:'--font-jetbrains',display:'swap'});
const space = Space_Grotesk({subsets:['latin'],variable:'--font-space',display:'swap'});

export const metadata: Metadata = {
  title: 'Bhavesh Pandey | Full Stack Developer',
  description: 'Full Stack Developer specializing in React, TypeScript, and MERN stack. B.Tech from JECRC University.',
  keywords: ['Bhavesh Pandey','Full Stack Developer','React Developer','TypeScript','JavaScript','MERN Stack','Frontend Developer','Jaipur','India','Portfolio'],
  authors: [{ name: 'Bhavesh Pandey' }], creator: 'Bhavesh Pandey',
  openGraph: { title:'Bhavesh Pandey | Full Stack Developer', description:'Full Stack Developer Building Innovative Solutions for a Brighter Tomorrow', url:'https://bhaveshpandey.dev', siteName:'Bhavesh Pandey', locale:'en_IN', type:'website' },
  twitter: { card:'summary_large_image', title:'Bhavesh Pandey | Full Stack Developer', description:'Full Stack Developer Building Innovative Solutions for a Brighter Tomorrow' },
  robots: { index:true, follow:true },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${space.variable}`}><body className="bg-surface font-sans text-white antialiased">{children}</body></html>;
}