import { useRouter } from "next/router";
import React from "react";
import { useCart } from "../../hooks/useCart";
import { Icons, Container, Logo, CartContainer } from "./styles";

function Header() {
  const navigate = useRouter();
  function handleGoToHome() {
    navigate.push("/");
  }

  function handleGoToCart() {
    navigate.push("/Cart");
  }

  const { cart } = useCart();
  const itemsCount = Object.keys( cart ).length
  return (
    <Container>
      <Logo onClick={handleGoToHome} />

      <CartContainer>
        
        {itemsCount > 0 
          ? 
            <>
              <Icons.cartFill size={"30px"} onClick={handleGoToCart} />
              <span>{itemsCount}</span>
            </>
          :
            <Icons.cart size={"30px"} onClick={handleGoToCart} />

          }

      </CartContainer>
    </Container>
  );
}

export default Header;
