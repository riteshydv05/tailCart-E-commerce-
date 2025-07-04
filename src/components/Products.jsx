import React from 'react'
import Heading from './Heading'
import ProductCard from './ProductCard';

const ProductsData = [
  { id: 1, name: 'Camera', price: '$99',image:"../../public/Cam.png" },
  { id: 2, name: 'RTX 4090', price: '$99',image:"../../public/Rtx.png" },
  { id: 3, name: 'Mechanical Keyboard', price: '$99', image:"../../public/Keybg.png" },
  { id: 4, name: 'Monitor', price: '$99', image:"../../public/Monitor.png" },
  { id: 5, name: 'iPhone 16 Pro Max', price: '$99', image:"../../public/Iphone.png" },
  { id: 6, name: 'Vision Pro', price: '$99', image:"../../public/Vision.png" },
  { id: 7, name: 'Wireless Earbuds', price: '$99', image:"../../public/Buds.png" },
  { id: 8, name: 'Smartwatch', price: '$99', image:"../../public/Swatchbg.png" },
];
function Products() {
  return (
    <div>
      <div className="container mx-auto">
        {/* {Header } */}
        <Heading title=" Best Products" subtitle="Explore our most selling products" />
        {/* {Body-section} */}
        <ProductCard data={ProductsData} />
      </div>
    </div>
  ) 
}

export default Products
