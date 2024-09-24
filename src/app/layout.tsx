import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Provider } from '../components/provider'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import ShowComponent from '@/components/showComponents'
import AuthProvider from '@/context/AuthContext'
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'M. J. PEREGRINOS',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <Provider>
          <div className='flex flex-col min-h-screen'>
            <ShowComponent>
              <NavBar />
            </ShowComponent>
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
        </Provider>
        </AuthProvider>
      </body>
    </html>
  )
}
