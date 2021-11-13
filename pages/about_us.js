import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'
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
                <ul className="text-sm border-4 border-purple-500">
                  <li>Software Developer outside of Portland, OR</li>
                  <li> --- </li>
                  <li>Enjoys learning the intricacies of code and how things work</li>
                  <li> --- </li>
                  <li>Wants to use software and technology to help people and enhance education</li>
                </ul>
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
              <ul className="text-sm border-4 border-yellow-500">
                <li>Software Developer living in Portland, Oregon</li>
                <li> --- </li>
                <li>Previous work in the Navy and as a bartender brings unique skill set</li>
                <li> --- </li>
                <li> Wants to use software development to help redesign the world so everyone can do everything</li>
              </ul>
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
              <ul className="text-sm border-4 border-blue-500">
                <li>Formerly an Architectural draftsman based in New York</li>
                <li> --- </li>
                <li>Currently a Software Developer finishing an education at Code Fellows</li>
                <li> --- </li>
                <li>Interested in Crypto, Outer Space and Fundraising</li>
              </ul>
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
              <ul className="text-sm border-4 border-green-500">
                <li>Full Stack Developer in the Greater St. Louis area</li>
                <li> --- </li>
                <li>Obsessed with learning anything and everything related to code</li>
                <li> --- </li>
                <li>Strives to be a SME on deep learning, machine learning, A.I. and A.R.</li>
              </ul>
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
