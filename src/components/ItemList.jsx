import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {

  return (
    productos.map((p) => {
        return (
        <Item p = {p} key={p.id}/>
        )
    })
  )
}

export default ItemList