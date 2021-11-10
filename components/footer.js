import Link from 'next/link'
import useResource from '../hooks/useResource'

export default function Footer() {

  const {emotionState } = useResource();
  
  return (
<div className="w-full bg-gray-800">
    <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
        <div className="container flex flex-col flex-wrap items-center justify-between mx-auto">
            <ul className="flex mx-auto text-center text-white">
              <Link href="/resources"><li className="p-2 cursor-pointer hover:underline">Resources</li></Link>
              <Link href="/about_us"><li className="p-2 cursor-pointer hover:underline">About Us</li></Link>
              <Link href="site_map"><li className="p-2 cursor-pointer hover:underline">Site Map</li></Link>
            </ul>
            
            <div className="flex mx-auto text-center text-white">
                Pix-R-Picks © 2021
            </div>
        </div>
    </footer>
</div>
  )
}