import Header from "../components/Header";
import { CartProvider } from "../store/contexts/CartContext";
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
