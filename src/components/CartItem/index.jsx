import React, { Fragment, useState } from 'react'
import { Modal } from '../../pages/MyCart/styles';
import { useCart } from '../../store/hooks/useCart'
import Confirm from '../Confirm';
import { ContainerIcons, Icon, Quantity } from './styles'

function CartItem({name, quantity}) {
    const { moreOne, minusOne, removeToCart } = useCart()
    const [visibleModal, setvisibleModal] = useState(false)

    const close = ()=>{
        setvisibleModal(false)
    }
    const openConfirm = ()=>{
        setvisibleModal( true )
    }
    function add() {
        moreOne( name );
    }

    function eraseItem() {
        
        removeToCart(name)
    }

    function remove() {
        if( quantity == 1 )
            return openConfirm()
        minusOne( name );
    }
  return(
    <Fragment>
        <span>
            {name}
        </span>
        <Quantity>
            {quantity}
        </Quantity>

        <ContainerIcons>
            <Icon.add onClick={add} />
            <Icon.remove onClick={remove} />
            <Icon.trash onClick={openConfirm} />
            <Confirm  visible={visibleModal} text="Are you sure you want remove item ?" ok={eraseItem} close={close} cancel={close}/>
        </ContainerIcons>
        
    </Fragment>
  )
}

export default CartItem