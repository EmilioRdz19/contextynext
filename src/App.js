import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

function App() {
  const [t, i18n] = useTranslation("global")
  const [count, setCount] = useState(0)

  return (
    <div className=''>
<nav className="bg-gray-400 border-white-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white text-xl text-center" aria-current="page">Home</a>
        </li>
        <li>
        <div onClick={() => { i18n.changeLanguage("en") }} className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer text-xl text-center'>
          {t("navbar.ingles")}
      </div>
        </li>
        <li>
        <div onClick={() => { i18n.changeLanguage("es") }} className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer text-xl text-center'>
        {t("navbar.espanol")}
            </div>
        </li>
      </ul>
    </div>
  </div>
  <div className='flex justify-end'>
            <div className='mx-5 hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              LINKEDIN
            </div>
            <br></br>
            <div className='mx-5 hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              TWITTER
            </div>
          </div>
</nav>
      

      
<div className='w-2/4' >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className='text-4xl text-white font-extrabold text-xl text-center '>Jorge Emilio Rodriguez Valdes</h2>
        <br></br>
        <br></br>
        <br></br>
        <p className='text-xl text-center  text-gray-400 text-xl text-center'>{t("body.descripcion")}</p>
        <br></br>
        <br></br>
        <button  onClick={()=>{setCount(count + 1)}} className="bg-green-500 hover:bg-green-700 text-white font-bold py-5 px-12 border border-green-700 roundedtext-xl">
        {t("body.contador")}
        </button>
        <br></br>
        <br></br>
        <br></br>
        <p className=' text-white text-xl text-center'>{t("body.contador2")}: {count}</p>
        <br></br>
        <p className='text-xl text-center text-white'>{t("body.DescripcionTecnologias")}</p>
      </div>
      
      <img className='rounded-full w-69 h-69 ' src="https://avatars.githubusercontent.com/u/67291907?s=400&u=39a17128bb11c0fcc890772c4465c4697cfabcf6&v=4" align="right" />
      

</div>



    
  );
}

export default App;
