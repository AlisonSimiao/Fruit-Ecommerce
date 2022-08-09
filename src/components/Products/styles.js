import styled from "styled-components";

export const InformationsPrimary = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid;
    background-color: #06ec064e;
    box-shadow: 5px 5px 5px #00000065;
    text-transform: capitalize;

    gap: .5rem;
    padding: 1rem;
    position: relative;
    transition: all .3s ease-in;
` 

export const Nutritions = styled( InformationsPrimary )`

    color: red;
    border: 1px dashed red;
    font-size: .8rem;
    background-color: black;
    position: absolute;
    bottom: 0;
    
    transform: ${({ show })=>{
        return show
        ? 'translate(0,100%)  scale(1);'
        : 'translate(0,0)  scale(0);'
    }};
    gap: .1rem;
    z-index: 10;
`
export const LineNutritions = styled.span`
    text-transform: lowercase;

    strong{
        text-transform: capitalize;
    }
`

export const Title = styled.strong`
    text-transform: uppercase;
`