'use client'
import Appbar from './components/Appbar';
import Bottom from './components/Bottom';
import Drawer from './components/Drawer';
import React, {useState} from 'react';
import { useRouter } from "next/navigation";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const router = useRouter();

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

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

      <Bottom></Bottom>
    </main>
  )
}