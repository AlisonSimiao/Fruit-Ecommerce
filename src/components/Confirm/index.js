import React from 'react'
import { Box, Button, Container } from './styles'
import {CgClose} from "react-icons/cg"
import { FaCheck } from 'react-icons/fa'

function Confirm({visible,text, ok, cancel}) {
  return (
    <Container visible={visible}>
        <Box>
            <span>
                confirm
                <CgClose />
            </span>
            <p>{text}</p>
            <div>
                <Button ok onClick={ok}>
                    <FaCheck />
                </Button> 
                
                <Button cancel onClick={cancel}>
                    <CgClose />
                </Button>
            </div>
        </Box>
    </Container>
  )
}

export default Confirm