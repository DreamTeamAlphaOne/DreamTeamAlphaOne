import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import MainPage from '../components/MainPage'
import Login from '../components/Login'

import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function Home() {

  const { user } = useAuth()
  
  const { loading, resources, emotionState, buttonState, handleEmotionChange, showSuggestionOrPicker } = useResource();
  
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
                buttonState={buttonState}
                resources={resources}
                loading={loading}
                showSuggestionOrPicker={showSuggestionOrPicker}/>
      
      : 
      <div className="w-1/2 m-5">
        <Login />
      </div>
      }

      <Footer />
    </div>
  )
}
