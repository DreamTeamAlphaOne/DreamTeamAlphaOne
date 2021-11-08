import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import ShowMovie from '../components/show_movie'
import Login from '../components/Login'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function Home() {

  const { user } = useAuth()
  console.log(user)

  const { resources } = useResource();
  console.log(resources);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pix-R-Picks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Home"
              description="Welcome to our app!"
      />

      { user ? 
        <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
          {/* <ShowMovie /> */}
        </main> 
      : 
      <div className="w-1/2 m-5">
        <Login />
      </div>
      }

      <Footer />
    </div>
  )
}
