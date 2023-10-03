'use client'
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, {useContext, useEffect, useState} from 'react';
import 'tailwindcss/tailwind.css'
import { fetchProducts } from '@/app/utils/api';
import { CartContext } from '@/app/contexts/cartContext';
import { ProductContainer, ProductImage, CardButton } from '@/app/styles/ProductsStyles';



const ProductsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const {addToCart} = useContext(CartContext);
 

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }


  const { data: session } = useSession();
  const router = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    }
    getProducts();
  }, []);
  
  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
          
          <ul>
           {products.map((product) => (

           <li key={product.id}>
            <ProductContainer>
            <ProductImage src={product.image} width={100}></ProductImage>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <CardButton
               onClick={() => addToCart(product)}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Add cart</CardButton>
              </ProductContainer>
           </li>

          ))}

          </ul>





      <Bottom></Bottom>
    </main>
  );






}
export default ProductsPage;