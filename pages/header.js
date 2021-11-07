

export default function Header(){
  return (
    
<div class="w-full h-screen">
   
    <nav class="sticky w-full h-auto bg-gray-200 px-8 sm:px-0">
        <div class="container flex justify-between py-4 mx-auto">
            <label class="text-2xl font-light text-gray-800">
                Pix-R-Picks
            </label>
            <ul class="flex text-gray-800 items-center">
                <li class="uppercase font-semibold mr-6">
                    <a href='#' class='hover:text-blue-600 transition'>
                        Home
                    </a>
                </li>
                <li class="uppercase font-semibold mr-6">
                    <a href='#' class='hover:text-blue-600 transition'>
                        About Us
                    </a>
                </li>
                <li class="uppercase font-semibold mr-6">
                    <a href='#' class='hover:text-blue-600 transition'>
                        Saved Movies
                    </a>
                </li>
                <li class="uppercase font-semibold mr-6">
                    <a href='#' class='hover:text-blue-600 transition'>
                        User Account
                    </a>
                </li>
                <li class="uppercase font-semibold mr-6 rounded-md border border-blue-400 text-blue-400 hover:text-gray-200 hover:bg-blue-400 transition">
                    <a href='#' class='block px-4 py-1'>
                        Login
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <section class="w-full h-1/4 bg-gray-800">
        <div class="container w-full h-full px-8 sm:px-0 mx-auto flex flex-col justify-center">
            <h1 class="text-6xl text-gray-100 font-bold">Page Title</h1>
            <p class="text-gray-200 mt-4">Description or something about whatever is on this page</p>
        </div>
    </section>
</div>
  )
}