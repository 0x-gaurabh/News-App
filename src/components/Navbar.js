import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { filterCategory } from '../redux/dataSlice/dataSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch =useDispatch()
  return (
    <nav className="bg-gradient-to-r from-blue-600 transition-all duration-200 ease-in-out to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c2.2 0 4-1.8 4-4S14.2 0 12 0 8 1.8 8 4s1.8 4 4 4zm0 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 10c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
            ></path>
          </svg>
          <Link to={'/'} >
          <div className="text-white text-3xl font-bold tracking-wide cursor-pointer hover:text-gray-200">
            News<span className="text-yellow-400 hover:text-yellow-200">App</span>
          </div>
          </Link>
        </div>
        <div className="md:hidden ">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:items-center">
           

            <button

              onClick={()=>dispatch(filterCategory('general'))}
              className="text-white md:mx-4 my-1 md:my-0 py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
              >
              Home
            </button>
            
            <button
             onClick={()=>dispatch(filterCategory('business'))}
              className="text-white md:mx-4 my-1 md:my-0 py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
            >
            Business
            </button> 
            <button
              onClick={()=>dispatch(filterCategory('science'))}
              className="text-white md:mx-4 my-1 md:my-0 py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
            >
             Science
            </button> 
            <button
              onClick={()=>dispatch(filterCategory('entertainment'))}
              className="text-white md:mx-4 my-1 md:my-0 py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
            >
              Entertainment
            </button> 
            <button
               onClick={()=>dispatch(filterCategory('health'))}
              className="text-white md:mx-4 my-1 md:my-0 py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
            >
             Health
            </button> 
            <button
              onClick={()=>dispatch(filterCategory('sports'))}
              className="text-white md:mx-4 my-1 md:my-0 py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
            >
              Sports
            </button> 
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
