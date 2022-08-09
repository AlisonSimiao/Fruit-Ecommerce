import styled from "styled-components";
import {IoIosAddCircle, IoMdRemoveCircle, IoMdTrash} from "react-icons/io"

const add = styled(IoIosAddCircle)`
    font-size: 20px;
`

const remove = styled(IoMdRemoveCircle)`
    font-size: 20px;
`
const trash = styled(IoMdTrash)`
    font-size: 20px;
`

export const Quantity = styled.span`
    background: #220d9c;
    width: 2rem;
    padding-block: .2rem;
    color: white;
    text-align: center;
`

export const Icon = {
    add,
    remove,
    trash
}

export const ContainerIcons = styled.span`
    display: flex;
    gap: 20px;
    justify-self: end;
    
`