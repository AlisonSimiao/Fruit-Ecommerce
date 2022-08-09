import styled from "styled-components";

const radiusSize = "0.4rem";

export const Container = styled.div`
  position: absolute;
  
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff49;
  z-index: 1000;

  display: ${(props)=>{
    return props.visible? "flex" : "none"
  }};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  gap: 20px;
  border: 1px solid black;
  width: 25vw;

  border-radius: ${radiusSize};
  background-color: white;

  span {
    display: flex;
    background-color: #eeeeee;
    padding: .8rem 1rem;

    border-top-left-radius: ${radiusSize};
    border-top-right-radius: ${radiusSize};
    align-items: center;
    justify-content: space-between;
    color: #474747;
    box-shadow: 0 0 2px black;
  }
  div{
    display: flex;
    gap: 20px;
    align-self: center;
  }

  p{
    text-align: center;
    font-size: .8rem;
    color: #474747;
  }
`;

export const Button = styled.button`
    all: unset;
    padding-block: .5rem;
    text-align: center;
    width: 100px;
    border: 1px solid #00000052;
    color: white;
    background: ${(props)=>{
        if( props.ok )
            return "#5db40c"
        if( props.cancel )
            return "#d63636"
    }};
    
`
