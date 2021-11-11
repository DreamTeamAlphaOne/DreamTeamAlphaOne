import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Login from '../components/login'
import { useAuth } from '../contexts/auth'

export default function AboutUs() {

  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pix-R-Picks</title>
      </Head>
      
      <Header title="About Us"
      description="More about our team"/>

      { user ? ''
      :
      <div className="w-1/2 m-5">
        <Login />
      </div>
      }

      <main className="flex flex-col items-center justify-center flex-1 w-full p-4 px-20 text-center">
        <div className="grid w-full grid-cols-4 gap-4">
          
          <div className="p-4 bg-purple-300 border-4 border-purple-500">
              <img className="border-4 border-purple-500 rounded-full" src="/kbradshaw.jpeg" alt="Kassie Bradshaw"/>
            <div>
              <p className="m-4 font-mono font-black">Kassie Bradshaw</p>
              <p className="border-4 border-purple-500">Kassie's blurb here</p>
            </div>
            <ul>
                  <li>
                    <a href ="https://github.com/kassiebradshaw" className="text-blue-600 underline hover:text-blue-800 visited:text-gray-500">GitHub</a>
                  </li>
                  <li>
                    <a href ="https://www.linkedin.com/in/kassie-bradshaw-2021/" className="text-blue-600 underline hover:text-blue-800 visited:text-gray-500">LinkedIn</a>
                  </li>
                </ul>
          </div>
          
          <div className="p-4 bg-yellow-300 border-4 border-yellow-500">
            <img className="border-4 border-yellow-500 rounded-full" src="/mhendricks.jpeg" alt="Michael Hendricks" />
            <div>
              <p className="m-4 font-mono font-black">Michael Hendricks</p>
              <p className="border-4 border-yellow-500">Michael H's blurb here</p>
            </div>
            <ul>
                  <li>
                    <a href ="https://github.com/mhendricks96" className="text-blue-600 underline hover:text-blue-800 visited:text-gray-500">GitHub</a>
                  </li>
                  <li>
                    <a href ="https://www.linkedin.com/in/michael3hendricks/" className="text-blue-600 underline hover:text-blue-800 visited:text-gray-500">LinkedIn</a>
                  </li>
                </ul>
          </div>
          
          <div className="p-4 bg-blue-300 border-4 border-blue-500">
            <img className="border-4 border-blue-500 rounded-full" src="/mryan.jpeg" alt="Michael Ryan" />
            <div>
              <p className="m-4 font-mono font-black">Michael Ryan</p>
              <p className="border-4 border-blue-500">Michael R's blurb here</p>
            </div>
            <ul>
                  <li>
                    <a href ="https://github.com/Michaelryan228" className="text-blue-600 underline hover:text-blue-800 visited:text-gray-500">GitHub</a>
                  </li>
                  <li>
                    <a href ="https://www.linkedin.com/in/michaelanthonyryan/" className="text-blue-600 underline hover:text-blue-800 visited:text-gray-500">LinkedIn</a>
                  </li>
                </ul>
          </div>
          
          <div className="p-4 bg-green-300 border-4 border-green-500">
            <img className="border-4 border-green-500 rounded-full" src="/awilliams.jpeg" alt="Anthony Williams" />
            <div>
              <p className="m-4 font-mono font-black">Anthony Williams</p>
              <p className="border-4 border-green-500">Anthony's blurb here</p>
            </div>
            <ul>
                  <li>
                    <a href ="https://github.com/Williamsjanthony15" className="text-blue-600 underline hover:text-blue-800 visited:text-gray-500">GitHub</a>
                  </li>
                  <li>
                    <a href ="https://www.linkedin.com/in/anthonyjwilliams15/" className="text-blue-600 underline hover:text-blue-800 visited:text-gray-500">LinkedIn</a>
                  </li>
                </ul>
          </div>
          
        </div>
      </main> 
      
      <Footer />
    </div>
  )
}
