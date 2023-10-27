'use client'
import Appbar from './components/Appbar';
import Bottom from './components/Bottom';
import Drawer from './components/Drawer';
import React, {useState, useEffect} from 'react';
import { useRouter } from "next/navigation";
import { searchProducts } from './utils/api';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  useEffect(() => {
    const search = async () => {
      if (searchTerm) {
        setSearchResults([]); // Limpa os resultados da busca anterior
        const results = await searchProducts(searchTerm);
        setSearchResults(results);
      }
    };
    search();
  }, [searchTerm]);
  
  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>

          <section className='flex'>
          <div className='mx-auto'>
          <br></br>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            onClick={() => router.push("/login")}
          >
            {" "}
            Login google
          </button>
          <br></br>
          <button
            className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full'
            onClick={() => router.push("/login1")}
          >
            {" "}
            login github
          </button>
          <br></br>
          {/* <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            onClick={() => router.push("/login2")}
          >
            {" "}
            login facebook
          </button> */}
          </div>
          </section>

          <div className='w-full mx-auto flex justify-center py-8'>
          <input
            type='text'
            placeholder='Buscar produtos'
            className='bg-gray-200 border border-gray-300 rounded-full p-2 w-80'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          
          
          />
        </div>

        <div className=' flex justify-center'>
          <ul>
            {searchResults.map((product) => (
              <li key={product.id}>
                <div className='bg-white p-4 shadow-md'>
                    <img src= {product.image} className='w-16 h-16 rounded-full'></img>
                    {product.title}
                </div>
              </li>
            ))}
            
          </ul>
        </div>

      <Bottom></Bottom>
    </main>
  )
}