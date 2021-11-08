import Head from 'next/head'
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

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <p>Hello World</p>
        <p>and hello, {user ? user.username : "new friend"}</p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
      </footer>
    </div>
  )
}
