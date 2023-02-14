import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DM_Sans } from '@next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'

const dm_sans = DM_Sans({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-dm-sans',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${dm_sans.variable}`}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </main>
    )
}
