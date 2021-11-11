import Head from 'next/head'
<<<<<<< HEAD
import Header from '../components/header'
=======
import Header from '../components/Header'
>>>>>>> 90a440f462d04d41ddfc891fcb3368be57a22135
import Footer from '../components/Footer'
import Login from '../components/Login'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function SavedMovies(props) {

  const { user } = useAuth();
  const { resources } = useResource();
  console.log(resources)

  if (resources && resources.length === 0) {
    return <h2>You have not saved any suggestions yet.</h2>
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pix-R-Picks</title>
      </Head>
      
      <Header title="Your Saved Movies"
      description="Take a look at what you've saved"/>

      { user ? 
      <div className="grid w-full grid-cols-5 gap-2">
        {resources && 
        resources.map((movie) => {
          return(
            <div>
              <div className="border-2 border-black">
                      {movie.title}
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
