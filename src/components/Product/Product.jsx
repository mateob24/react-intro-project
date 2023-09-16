import '../Product/Product.css';
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export const Product = ({eventClick}) => {
  const [products, setProducts] = useState([])

   async function getData () {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className='flex gap-10 flex-wrap items-center justify-center' id='products'>
      {/* <button className='text-white' onClick={getData}>Actualizar</button> */}
      {products.map((product) => (
        <div key={product.id} className="w-96 h-80 bg-white shadow-lg relative rounded-xl flex flex-col items-center justify-around">
          <div>
            <button onClick={eventClick} id='add-cart' className="p-3 m-1 absolute right-px rounded-full bg-gray-200"><FaPlus /></button>
          </div>
          <div className='h-2/3 flex items-center justify-center rounded-t-xl'>
            <img src={product.image} alt={product.title} className="h-48 object-cover" />
          </div>
          <div className='w-full h-12 flex items-center justify-center bg-gray-200'>
            <h4 className="px-2 w-full text-base text-center font-bold text-teal-700">{product.title}</h4>
          </div>
          <div className='w-full h-10 flex justify-between items-center'>
            <p className="px-3 w-44 text-base text-left font-bold">{product.category}</p>
            <p className="px-3 text-base text-right font-bold text-teal-700">${product.price}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
