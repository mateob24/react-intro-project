import { HeaderShop } from '../../HeaderShop/HeaderShop';
import { Product } from '../../Product/Product';
import { useState } from 'react';

export const Shop = () => {
  
  const [count, setCount] = useState(0);

  const eventClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <HeaderShop count={count}/>
      <Product eventClick={eventClick}/>
    </>
  )
}
