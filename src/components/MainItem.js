import React from 'react'
import { useNavigate } from 'react-router'

const MainItem = ({newItem}) => {
  const navigate =useNavigate()
   
  const handleDetail =(author) => {
      navigate(`/detail/${author}`)
  }
  
  return (
    <div>
       <div className="max-w-xs  bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover object-center  transition duration-300 transform hover:scale-110" src={newItem.
urlToImage
} alt="news" />
      <div className="p-4">
        <h2 className="hover:text-gray-600 text-xl cursor-pointer font-bold">{newItem.title}</h2>
        <p className="mt-2 hover:text-gray-500 cursor-pointer text-sm">{newItem.
content}
</p>
      </div>
      <div className="bg-gray-200 text-right py-2 px-4">
        <button 
        onClick={() =>handleDetail(newItem.author)}

          className="text-gray-800 text-xs font-semibold uppercase hover:text-blue-600 transition duration-300"
        >
          Read more
        </button>
      </div>
    </div>
    </div>
  )
}

export default MainItem
