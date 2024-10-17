import React from 'react'
import { Link ,Outlet } from 'react-router-dom'

const List = () => {
  return (
    <>
    <div className='List-disc'>
        <Link to ="/List/item1" className="list-item">Item1</Link>
        <Link to ="/List/item2" className="list-item">Item2</Link>
        <Link to ="/List/item3" className="list-item">Item3</Link>


    </div>
    <hr  className='bg-red-500 h-[2px] rounded'/>
    <Outlet/>
    </>
  )
}

export default List