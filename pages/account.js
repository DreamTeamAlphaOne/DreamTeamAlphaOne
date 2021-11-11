import Head from 'next/head'
<<<<<<< HEAD
import Header from '../components/header'
=======
import Header from '../components/Header'
>>>>>>> 90a440f462d04d41ddfc891fcb3368be57a22135
import Footer from '../components/Footer'
import Login from '../components/Login'
import { useAuth } from '../contexts/auth'

export default function Account() {

  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pix-R-Picks</title>
      </Head>
      
      <Header title="Account"
        description="Your Account Details"/>

      { user ? <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
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
