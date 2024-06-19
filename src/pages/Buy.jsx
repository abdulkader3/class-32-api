import React from 'react'
import { useSelector } from 'react-redux'

const Buy = () => {
    const love = useSelector((state)=> state.counter.value )
  return (
    <>
    <div className=" w-full h-full  ">
       <div className=" w-[400px] h-[400px] flex justify-center flex-wrap ">
        <div className=" w-[200px] h-[200]  m-5 ">
            <img src={love.image} alt="photo" />
        </div>

       </div>
    </div>
      
    </>
  )
}

export default Buy
