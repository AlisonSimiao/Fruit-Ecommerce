import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi"
import styled from "styled-components"

const cartFill = styled(HiShoppingCart)``
const cart =  styled(HiOutlineShoppingCart)``

export const Container = styled.span`
    background-color: gray;
    padding: 10px 10vw;
    display: flex;
    justify-content: space-between;
`
export const CartContainer = styled.div`
    position: relative;
    
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        color: white;
        font-weight: 700;
        font-size: .6rem;
        border-radius: 50%;
        width: .9rem;
        height: .9rem;
        background-color: #96be96;
    }
`

export const Logo = styled.div`
    background-image: url(${ './IMG/logo.png' });
    background-size: contain;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    cursor: pointer;
`

export const Icons = {
    cartFill,
    cart
}