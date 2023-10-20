import React from 'react'
import { Link } from "react-router-dom";
// import { logoDark } from '../assets/index';
import { cartImg, shop, userLogo } from '../assets/index';
import { useSelector } from 'react-redux';

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  console.log(productData)
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className='max-w-screen-xl h-full mx-auto  flex items-center justify-between'>
        <Link to='/'>
          <div>
            <img className='w-20' src={shop} alt="logodark" />
          </div>
        </Link>
        <div className='flex items-center gap-8'>
          <ul className=' flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-purple-900 hover:underline underline-offset-2 decoration-[2px] cursor-pointer'>Home</li>
            <li className='text-base text-black font-bold hover:text-purple-900 hover:underline underline-offset-2 decoration-[2px] cursor-pointer'>Pages</li>
            <li className='text-base text-black font-bold hover:text-purple-900 hover:underline underline-offset-2 decoration-[2px] cursor-pointer'>Shop</li>
            <li className='text-base text-black font-bold hover:text-purple-900 hover:underline underline-offset-2 decoration-[2px] cursor-pointer'>Elements</li>
            <li className='text-base text-black font-bold hover:text-purple-900 hover:underline underline-offset-2 decoration-[2px] cursor-pointer'>Blog</li>

          </ul>
          <Link to="/cart">
            <div className='relative' >
              <img className='w-6' src={cartImg} alt='cartimg' />
              <span className=' absolute top-2 left-0 justify-center w-6 flex items-center'>{productData.length}</span>
            </div>
          </Link>
          <img className='w-10 h-10 rounded'
            src={userLogo} alt='userlogo' />
        </div>
      </div>



    </div>
  )
}

export default Header;
