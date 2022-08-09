import styled from "styled-components";
import { AiFillCreditCard } from "react-icons/ai";
import {FaCheck} from "react-icons/fa"
const space = "20px";

export const Container = styled.div`
  border-left: 1px solid #0707076e;
  border-right: 1px solid #0707076e;
  margin-top: 20px;
  margin-inline: 10vw;
  box-shadow: -3px 0px 3px #03030329, 3px 0px 3px #03030329, 0px 5px #ffffff;

  padding: ${space};

  hr {
    margin-block: ${space};
  }
`;

export const MyProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  row-gap: 20px;
  width: 80%;

  span {
    justify-self: center;
    font-weight: 700;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;
export const Title = styled.p`
  text-transform: capitalize;
  background-color: #8080807d;

  font-weight: bolder;

  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;

export const SubTitle = styled.p`
  font-size: 0.7rem;
  color: #808080e1;
`;

const DetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const PurchaseDetails = styled(DetailsItem)`
  textarea {
    border: none;
    background: #808080e1;
    
    &:focus{
      border: none;
    }
  }
`;

const card = styled(AiFillCreditCard)`
  font-size: 1.3rem;
`;
export const Icon = {
  card,
};

export const OrderDetails = styled(DetailsItem)`
  span {
    display: flex;
    justify-content: space-between;

    text-transform: capitalize;

    margin-top: 1rem;
    font-size: 0.8rem;
    font-weight: 700;
    border-bottom: 1px solid #4d4d4d29;
    padding-bottom: 10px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    padding-block: 0.5rem;

    color: white;
    background: green;

    gap: 1rem;
    opacity: 0.8;
    font-weight: 700;
    border: 1px solid #003803;
    border-radius: 1rem;

    &:hover {
      opacity: 1;
    }
  }
`;

export const NoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: span 5;
  grid-column: span 3;
  
  text-transform: uppercase;
`;