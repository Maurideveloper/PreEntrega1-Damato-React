import imgChocoCross from '../assets/ChocoCrossmain.png'
import CartWidget from './cartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box
} from '@chakra-ui/react'


const NavBar = () => {

    
    return (
        
        
        <>
            <header>
                <nav className='nav'>
                <Flex>
                    <Box p='2'>
                        <img className="imgChocoCross" src={imgChocoCross} alt="" />
                    </Box>
                    <Box p='2' className='categorias'>
                        <Menu>
                            <MenuButton>
                                Categorias
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Seccion 1</MenuItem>
                                <MenuItem>Seccion 2</MenuItem>
                                <MenuItem>Seccion 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
                
                <CartWidget/>

                    

                </nav>
            </header>
        </>
    )
}


export default NavBar