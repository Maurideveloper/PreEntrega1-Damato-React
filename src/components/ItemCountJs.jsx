import {useState} from "react"

const ItemCountJs = () => {
    const [contador, setContador] = useState(0)

    return (
        <>
        <div className="itemContador">
            <button onClick={()=> contador > 0? setContador(contador - 1): setContador(contador)}> - </button>
            <p>{contador}</p>
            <button onClick={()=> contador >= 0? setContador(contador + 1): setContador(contador)}> + </button>
        </div>
        
        </>
    )
}

export default ItemCountJs 