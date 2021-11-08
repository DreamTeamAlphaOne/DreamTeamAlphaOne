import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { useAuth } from '../contexts/auth'
import { useResources } from '../hooks/useResource'

export default function PageNameYouWant() {

    const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pix-R-Picks</title>
      </Head>
      
      <Header title=""
      description=""/>

      { user ? '' 
      : 
      <div className="w-1/2 m-5">
        <h2 className="text-center">Please Log In</h2>
        <Login />
      </div>
      }

      <Footer />
    </div>
  )
}
