import imgCarrito from '../assets/carrito.png'
import {
    Flex,
} from '@chakra-ui/react'

const CartWidget = () => {
    const numeroHardcodeado = 3

    return (
        <>
            <div>
                <Flex>
                    <p>{numeroHardcodeado}</p>
                    <img class="imgCarrito" src={imgCarrito} alt="" />
                </Flex>
            </div>
        </>
    )
}


export default CartWidget