import React from 'react'
import MainItem from './MainItem'

const Main = ({item}) => { 
  const newItem=item.slice(2,50)
  console.log(newItem);


  
  return (
    <div className='flex mt-6 flex-wrap gap-14 justify-center '>
    {
      newItem.map((newItem) => <MainItem  key={newItem.title} newItem={newItem} />)
    }
    </div>
  )
}

export default Main
