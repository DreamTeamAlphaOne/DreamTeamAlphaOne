import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import ShowMovie from './show_movie'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pix-R-Picks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <ShowMovie />
        <p>Hello World</p>
      </main>

      <Footer />
    </div>
  )
}
