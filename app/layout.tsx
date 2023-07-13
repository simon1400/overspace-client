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

export const revalidate = 0
export const dynamic = 'force-dynamic'

async function getData() {
  const { data } = await client.query({
    query: navQuery,
  });

  const topNav = data.nav.data.attributes.topNav;
  const soc = data.nav.data.attributes.soc;
 
  return {topNav, soc}
}

export const metadata = {
  generator: 'Next.js',
  applicationName: 'Enev–Juráň Architekti',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  creator: 'Dmytro Pechunka',
  metadataBase: new URL('https://enev-juran.com/'),
  alternates: {
    canonical: `https://enev-juran.com`,
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
        <Header topNav={nav.topNav} soc={nav.soc} />
        {children}
      </body>
    </html>
  )
}
