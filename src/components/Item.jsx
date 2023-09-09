import React from 'react'
import { Card, Stack, CardBody, CardFooter, Divider, Text, Heading, Button, Image, ButtonGroup, flexbox } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({p}) => {
  
  console.log(p)
  
  return (
    <div key={p.id}>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{p.nombre}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                    ${p.precio}
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                        <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                         <Link to={`/item/${p.id}`}> Detalle </Link>
                        </Button>
                        </ButtonGroup>
                </CardFooter>
            </Card>
            </div>
  )
}

export default Item