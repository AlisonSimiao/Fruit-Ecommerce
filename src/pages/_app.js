import { Fragment } from "react";
import Header from "../components/Header";
import { CartProvider } from "../contexts/CartContext";
import "./../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
