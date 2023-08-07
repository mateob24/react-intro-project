// import React from 'react'
import "../Product/Product.css"
import { FaPlus } from "react-icons/fa";

const imgProduct = 'https://www.revistaturbo.com/wp-content/uploads/2023/05/Audi-Q8-e-tron-5.jpg'

export const Product = () => {
  return (
    // o h-80 --> h-full
    <div className="w-80 h-72 m-20 shadow-lg relative rounded-xl bg- mt-4 flex flex-col items-center">
      <a href="">
        <div className="p-3 m-1 absolute right-px opacity-50 rounded-full bg-white"> <FaPlus /> </div>
      </a>
      <img src={imgProduct} alt="imgProduct" className="rounded-t-xl w-80  h-40 object-cover m" />
      <h2 className="px-4 py-2 w-full font-semibold text-2xl text-left">Camioneta</h2>
      <div className='w-full h-8 absolute bottom-8 bg-gray-200 flex justify-evenly items-center'>
        <p className="px-4 w-3/6 text-lg text-teal-700 font-semibold">Audi Q8 e-tron</p>
        <p className="px-4 w-3/6 text-lg text-right font-semibold">$ 369.900.000</p>
      </div>
    </div>
  )
}
