import Head from "next/head";
import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem";
import { useCart } from "../../store/hooks/useCart";
import {
  Container,
  Details,
  Icon,
  MyProducts,
  NoItem,
  OrderDetails,
  PurchaseDetails,
  SubTitle,
  Title,
} from "./styles";

function Cart() {
  const { cart: products } = useCart();
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0)
  const [subTotal, setSubTotal] = useState(0)

  

  useEffect(() => {
    const TenPerCent = 0.1;
    const auxSubTotal =  getTotalProducts();
    const auxTax = Math.round(auxSubTotal* TenPerCent)
    
    setSubTotal( auxSubTotal )

    setTax( auxTax );
    setTotal( auxTax + auxSubTotal );
  }, [products]);

  function getTotalProducts() {
    return Object.keys(products).reduce((total, key)=>{
        return (total + products[key].quantity)
    }, 0);
  }

  return (
    <div>
      <Head>
        <title>Meu carinho</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <MyProducts>
          <span>Product</span>
          <span>Quantity</span>
          <span />
          {total ? (
            Object.keys(products).map((key) => {
              return (
                <CartItem
                  key={key}
                  name={products[key].product.name}
                  quantity={products[key].quantity}
                />
              );
            })
          ) : (
            <NoItem>Empty cart</NoItem>
          )}
        </MyProducts>
        <hr />
        <Details>
          <PurchaseDetails>
            <Title>Information for seller</Title>
            <SubTitle>If you have some information for the Seller</SubTitle>
            <textarea rows={5} cols={10} />
          </PurchaseDetails>

          <OrderDetails>
            <Title>Order Details</Title>
            <SubTitle>
              Shipping and additionnal cost are calculeted based on values have
              entered
            </SubTitle>

            <span>
              <p>Subtotal</p>
              <p>{ subTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }) }</p>
            </span>
            <span>
              <p>tax</p>
              <p>{tax.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
            </span>

            <span>
              <p>total</p>
              <p>{total.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
            </span>
            <button>
              <Icon.card />
              proceed to checkout
            </button>
          </OrderDetails>
        </Details>
      </Container>
    </div>
  );
}

export default Cart;