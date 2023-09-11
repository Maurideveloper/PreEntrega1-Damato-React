import imgCarrito from '../../assets/carrito.png'

const CartWidget = () => {
    const numeroHardcodeado = 3

    return (
        <>
            <div className='cart'>
                <p className='cantCart'>{numeroHardcodeado}</p>
                <img className="imgCarrito" src={imgCarrito} alt="" />
            </div>
        </>
    )
}


export default CartWidget