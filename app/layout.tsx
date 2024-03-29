import '@/styles/globals.css'
import Header from './Header'

/* export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
} */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
    
      <body className='bg-gray-50 dark:bg-[#000000] transition-all duration-700'>
        <Header/>
        <div className='max-w-7xl mx-auto'>{children}</div>
      </body>
    </html>
  )
}
