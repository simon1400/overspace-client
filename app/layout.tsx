import Header from '@/components/Header'
import './globals.scss'
import localFont from 'next/font/local'
import { client } from '@/lib/api';
import navQuery from '@/queries/nav';

const Mont = localFont({
  src: [
    {
      path: '../fonts/bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/normal.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/normal.woff',
      weight: '300',
      style: 'normal',
    },
  ],
})

async function getData() {
  const { data } = await client.query({
    query: navQuery,
  });

  const nav = data.nav.data.attributes.topNav;
 
  return nav
}

export const metadata = {
  generator: 'Next.js',
  applicationName: 'Overspace',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  creator: 'Dmytro Pechunka',
  metadataBase: new URL('https://overspace.cz'),
  alternates: {
    canonical: `https://overspace.cz/`,
  },
  icons: {
    icon: [
      { url: '../favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '../favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '../favicon/favicon.ico',
    apple: '../favicon/apple-touch-icon.png',
  },
  manifest: '../favicon/site.manifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nav = await getData()

  return (
    <html lang="cs">
      <body className={Mont.className}>
        <Header data={nav} />
        {children}
      </body>
    </html>
  )
}
