import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function SavedMovies(props) {
  const { user } = useAuth();
  const { resources } = useResource();
  
  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pix-R-Picks</title>
      </Head>
      
      <Header title="Your Saved Movies"
      description="Take a look at what you've saved"/>

      { user ? 
      <div className="grid w-full grid-cols-5 gap-2 m-5">
        {resources && 
        resources.map((movie) => {
          return(
            <div key={movie.title} className="m-5 border-4 border-green-500">
              <div className="border-2 border-black">
                      <h2>{movie.title}</h2>
              </div>
              
            </div>
                )
        })}
      </div> 
      : 
      <div className="w-1/2 m-5">
        <Login />
      </div>
      }      
      
      <Footer />
    </div>
  )
}
