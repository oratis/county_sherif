import './globals.css'
import { Inter } from 'next/font/google'
import { GoogleAnalytics, UmamiAnalytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Babel Plus | A LLM Game Platform",
  description:
    "Babel Plus host many Games based on LLM such as OpenAI chatGPT and Google Gemini"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest"></link>
      <meta
        name="description"
        content="Babel Plus | A LLM Game Platform"
      />
      <meta
        property="og:description"
        content="Babel Plus | A LLM Game Platform"
      />
      <meta property="og:title" content="Babel Plus | A LLM Game Platform" />
      <meta
        name="twitter:description"
        content="Babel Plus | A LLM Game Platform"
      />
      <meta
        property="og:image"
        content="/og-image.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@JOJOhanbo" />
      <meta name="twitter:title" content="Babel Plus | A LLM Game Platform" />
      <meta name="twitter:description" content="Babel Plus | A LLM Game Platform" />
      <meta name="twitter:image" content="/og-image.png" />
      <meta name="twitter:creator" content="@Breaking_nerd" />
      <meta name="google-site-verification" content={process.env.GOOGLE_CONSOLE} />
      <body className={inter.className}>
        {children}
      </body>
      {process.env.NODE_ENV === "development" ? (
        <></>
      ) : (
        <>
          <GoogleAnalytics />
          <UmamiAnalytics />
        </>
      )}
    </html>
  )
}
