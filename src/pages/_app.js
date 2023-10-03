import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/app/contexts/cartContext";

function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <CartProvider>
            <Component {...pageProps}></Component>
            </CartProvider>
        </SessionProvider>
    )
};

export default App;