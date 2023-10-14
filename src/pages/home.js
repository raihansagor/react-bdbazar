import React from 'react'
import Banner from '../components/banner';
import Products from '../components/products';
import { useLoaderData } from 'react-router-dom';
import  { useEffect, useState } from "react";



const Home = () => {
  const [products, setProducts] = useState([]);
  
  
  const data=useLoaderData()
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  

  return (
    <div>
       <Banner/>
       <Products products={products} />
       
    </div>
  )
}

export default Home;
