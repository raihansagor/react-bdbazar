import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Product = () => {
  const [details, setDetails] = useState({})
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);

  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className='relative'>
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="productImg"
          />
          <div className="absolute top-4 right-0">
            {details.isNew && <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">Sale</p>}
          </div>
        </div>
      </div>
      <div>
        <h1>hello git</h1>
      </div>
    </div>
  )
}

export default Product;
