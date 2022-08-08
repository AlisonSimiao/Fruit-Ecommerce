import React from 'react'
import { Button, ContainerButtons } from './styles'

function ContainerButtonsBuyAndNutricios({ change, buy }) {
  return (
    <ContainerButtons >
        <Button onClick={change}>
            nutricions
        </Button>
        <Button onClick={buy}>
            Comprar
        </Button>
    </ContainerButtons>
  )
}

export default ContainerButtonsBuyAndNutricios