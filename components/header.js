import Link from 'next/link'
import { useAuth } from '../contexts/auth'


export default function Header(props){
    const { user, logout } = useAuth();
    
  return (
    
<div className="w-full ">
   
    <nav className="sticky w-full h-auto px-8 bg-gray-200 sm:px-0">
        <div className="container flex justify-between py-4 mx-auto">
            <label className="text-2xl font-light text-gray-800">
                Pix-R-Picks
            </label>
            <ul className="flex items-center text-gray-800">
                <li className="mr-6 font-semibold uppercase">
                    <Link href="/"><a className='transition hover:text-blue-600'>
                        Home
                    </a></Link>
                </li>
                {user ? 
                <li className="mr-6 font-semibold uppercase">
                    <Link href="/saved_movies"><a className='transition hover:text-blue-600'>
                        Saved Movies
                    </a></Link>
                </li> 
                : '' }
                {user ?
                <li className="mr-6 font-semibold uppercase">
                    <Link href="/account"><a className='transition hover:text-blue-600'>
                        User Account
                    </a></Link>
                </li> : '' }

                {user ?
                <li className="mr-6 font-semibold text-blue-400 uppercase transition border border-blue-400 rounded-md hover:text-gray-200 hover:bg-blue-400">
                     <button onClick={logout}>
                     Log Out
                     </button>
                 </li>
                 :
                 ''
                 }
            </ul>
        </div>
    </nav>
    <section className="w-full bg-gray-800 h-1/4">
        <div className="container flex flex-col justify-center w-full h-full px-8 mx-auto sm:px-0">
            <h1 className="text-6xl font-bold text-gray-100">{props.title}</h1>
            <p className="mt-4 text-gray-200">{props.description}</p>
        </div>
    </section>
</div>
  )
}