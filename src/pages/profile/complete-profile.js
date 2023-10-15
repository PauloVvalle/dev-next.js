import React, {useState} from 'react';
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import { useSession } from 'next-auth/react';
import 'tailwindcss/tailwind.css'
import CompleteProfileForm from '@/app/components/completeProfileForm';

const CompleteProfile = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState();

    const handleMenuToggle  = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const {data: session} = useSession();
    
    return(
        <main className='min-h-screen'>
        <Appbar onMenuToggle={handleMenuToggle}></Appbar>
        <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>


        {session? (
            <div>
                <h1>Formulario para completar o cadastro usando dados da sessão</h1>
                <CompleteProfileForm user={session.user}/>
            </div>

        ) : (
            <h1>Não logado</h1>

        )}


        <Bottom></Bottom>
        </main>
    );
}
export default CompleteProfile;