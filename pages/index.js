import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import ShowMovie from './show_movie'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function Home() {

  const { user } = useAuth()
  console.log(user)
  // const { user, login, logout } = useAuth();
  // const user = { username: 'kassie'}

  const { resources } = useResource();
  console.log(resources);
  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pix-R-Picks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <ShowMovie />
      </main>

      <Footer />
    </div>
  )
}
