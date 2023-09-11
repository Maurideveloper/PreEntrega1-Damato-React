import {useState} from "react"
import {ButtonGroup, Button } from '@chakra-ui/react'

const ItemCountJs = () => {
    const [contador, setContador] = useState(0)

    return (
        <>
        
            <ButtonGroup spacing='2'>
                <div className="itemContador">
                    <button className="buttonCont" onClick={()=> contador > 0? setContador(contador - 1): setContador(contador)}> - </button>
                    <p className="numCont">{contador}</p>
                    <button className="buttonCont" onClick={()=> contador >= 0? setContador(contador + 1): setContador(contador)}> + </button>
                </div>
                <Button variant='solid' colorScheme='blue' onClick={() => alert(`Se añadieron ${contador} productos`)}>
                    Comprar
                </Button>
            </ButtonGroup>
        
        
        </>
    )
}

export default ItemCountJs 