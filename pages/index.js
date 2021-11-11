import Head from 'next/head'
<<<<<<< HEAD
import Header from '../components/header'
import Footer from '../components/Footer'
import ShowMovie from '../components/show_movie'
=======
import Header from '../components/Header'
import Footer from '../components/Footer'

import MainPage from '../components/MainPage'
>>>>>>> 90a440f462d04d41ddfc891fcb3368be57a22135
import Login from '../components/Login'

import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function Home() {

  const { user } = useAuth()
  console.log(user)
  
  const { resources, emotionState, handleEmotionChange } = useResource();
  console.log(resources)
  console.log("Emotion state from useResource", {emotionState})
  
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
      <MainPage handleEmotionChange={handleEmotionChange}
                emotionState={emotionState}
                resources={resources}/>
      
      : 
      <div className="w-1/2 m-5">
        <Login />
      </div>
      }

      <Footer />
    </div>
  )
}
