import React from 'react'
import ProductCard from './productCard';

const Products = ({products}) => {
  

  
  return (
    <div className="py-10" >
        <div className='flex flex-col items-center gap-4'>
            <h1 className="text-2xl bg-indigo-500 text-white py-2 w-80 text-center">Shopping Everyday</h1>
            <span className="w-20 h-[3px] bg-black"></span>
            <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          quos fugit inventore, cumque quae corporis ratione tenetur eos
          voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
          asperiores repudiandae assumenda quidem.
        </p>
        </div>
        <div className='max-w-screen-xl py-10 grid grid-cols-4 mx-auto gap-8'>
            {
              products.map((item) =>(
                
                <ProductCard key={item._id} product={item}/>
              ))
              
            }
            
        </div>
        
      
    </div>
  )
}

export default Products;
