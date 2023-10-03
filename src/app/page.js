'use client'
import Appbar from './components/Appbar';
import Bottom from './components/Bottom';
import Drawer from './components/Drawer';
import React, {useState} from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  // const router = useRouter();

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            onClick={() => router.push("/login")}
          >
            {" "}
            Login
          </button>
      <Bottom></Bottom>
    </main>
  )
}