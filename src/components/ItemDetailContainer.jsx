import React from 'react'
import ItemCountJs from './ItemCountJs'
import {Grid } from '@chakra-ui/react'
import ItemList from './ItemList'

const ItemDetailContainer = () => {

    const productos = [
        {id: 1, nombre: "Producto A", descripcion: "Descripcion del producto A", precio: 1000},
        {id: 2, nombre: "Producto B", descripcion: "Descripcion del producto B", precio: 1500},
        {id: 3, nombre: "Producto C", descripcion: "Descripcion del producto C", precio: 2000},
        {id: 4, nombre: "Producto D", descripcion: "Descripcion del producto D", precio: 4000},
        {id: 5, nombre: "Producto E", descripcion: "Descripcion del producto E", precio: 2500},
        {id: 6, nombre: "Producto F", descripcion: "Descripcion del producto F", precio: 3000},
        {id: 7, nombre: "Producto G", descripcion: "Descripcion del producto G", precio: 1200},
        {id: 8, nombre: "Producto H", descripcion: "Descripcion del producto H", precio: 1800},
        {id: 9, nombre: "Producto I", descripcion: "Descripcion del producto O", precio: 2800}
    ]

   
    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        }
        else {
            reject("No hay productos")
        }
    })

    mostrarProductos 
    .then ((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log(error)
    })
    


  return (
    <>
    {<main className='main'>

        <h1 className='titulo'>{greeting}</h1>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <ItemList productos = {productos}/>
        </Grid>

    </main> }
    </>
  )
}

export default ItemDetailContainer