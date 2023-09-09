import React from 'react'
import {Grid } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const productos = [
        {id: 1, nombre: "Producto A", descripcion: "Descripcion del producto A", precio: 1000, stock: 5, categoria: "A"},
        {id: 2, nombre: "Producto B", descripcion: "Descripcion del producto B", precio: 1500, stock: 15, categoria: "B"},
        {id: 3, nombre: "Producto C", descripcion: "Descripcion del producto C", precio: 2000, stock: 25, categoria: "C"},
        {id: 4, nombre: "Producto D", descripcion: "Descripcion del producto D", precio: 4000, stock: 35, categoria: "A"},
        {id: 5, nombre: "Producto E", descripcion: "Descripcion del producto E", precio: 2500, stock: 45, categoria: "B"},
        {id: 6, nombre: "Producto F", descripcion: "Descripcion del producto F", precio: 3000, stock: 55, categoria: "C"},
        {id: 7, nombre: "Producto G", descripcion: "Descripcion del producto G", precio: 1200, stock: 15, categoria: "A"},
        {id: 8, nombre: "Producto H", descripcion: "Descripcion del producto H", precio: 1800, stock: 25, categoria: "B"},
        {id: 9, nombre: "Producto I", descripcion: "Descripcion del producto I", precio: 2800, stock: 5, categoria: "C"}
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

        <h1 className='titulo'>Bienvenidos! Tienda de chocolates ChocoCross</h1>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <ItemDetail productos = {productos}/>
        </Grid>

    </main> }
    </>
  )
}

export default ItemDetailContainer