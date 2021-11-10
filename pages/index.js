import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import ShowMovie from '../components/show_movie'
import EmotionPicker from '../components/emotion_picker'
import Login from '../components/Login'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function Home() {

  // const [emotionState, setEmotionState] = useState('Nothing selected yet');

  const { user } = useAuth()
  console.log(user)
  
  const { resources, emotionState, setEmotionState, handleEmotionChange } = useResource();
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
      <main className="grid w-full grid-cols-2 gap-4 p-5 border-2 border-purple-500">
        <div className="w-full p-5 m-5 border-2 border-green-400">
          
        </div>
        
        <div className="w-full p-4 m-5 border-2 border-green-400">
          <EmotionPicker handleEmotionChange={handleEmotionChange} />
          {/* <EmotionPicker /> */}
        </div>
        
      </main>
        // <main className="grid flex-row items-center justify-center flex-1 w-full grid-cols-2 px-20 text-center border-2 border-yellow-600">
        //     <div className="w-1/2 border-2 border-black"></div>
        //     <div className="w-1/2 border-2 border-black"><EmotionPicker /></div>
        //   {/* <ShowMovie /> */}
        // </main> 
      : 
      <div className="w-1/2 m-5">
        <Login />
      </div>
      }

      {/* <button onClick={() => handleEmotionChange('Frustrated')} className="border-2 border-black-500">PUSH THIS BUTTON</button> */}

      <Footer />
    </div>
  )
}
