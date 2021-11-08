import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Login from '../components/Login'
import { useAuth } from '../contexts/auth'

export default function ContactUs() {

  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pix-R-Picks</title>
      </Head>
      
      <Header title="Contact Us"
      description="If you'd like to reach us..."/>

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
