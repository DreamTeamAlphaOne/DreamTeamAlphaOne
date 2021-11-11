import Link from 'next/link'
import useResource from '../hooks/useResource'

export default function Footer() {
  
  return (
  <div className="w-full bg-gray-800">
      <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
          <div className="container flex flex-col flex-wrap items-center justify-between mx-auto">
              <ul className="flex mx-auto text-center text-white">
                <Link href="/about_us"><li className="p-2 cursor-pointer hover:underline">About Us</li></Link>
              </ul>
              
              <div className="flex mx-auto text-center text-white">
                  Pix-R-Picks © 2021
              </div>
          </div>
      </footer>
  </div>
  )
}