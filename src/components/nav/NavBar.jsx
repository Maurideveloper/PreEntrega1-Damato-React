import imgChocoCross from '../../assets/ChocoCrossmain.png'
import CartWidget from './CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const NavBar = () => {

    
    return (
        
        
        <>
            <header>
                <nav className='nav'>
                <Flex>
                    <Box p='2'>
                        <Link to={"/"}>
                            <img className="imgChocoCross" src={imgChocoCross} alt="" />
                        </Link>
                    </Box>
                    <Box p='2' className='categorias'>
                        <Menu>
                            <MenuButton>
                                Categorias
                            </MenuButton>
                            <MenuList>
                                <MenuItem className='categoria'><Link to={`/categoria/${"A"}`}>Seccion 1</Link></MenuItem>
                                <MenuItem className='categoria'><Link to={`/categoria/${"B"}`}>Seccion 2</Link></MenuItem>
                                <MenuItem className='categoria'><Link to={`/categoria/${"C"}`}>Seccion 3</Link></MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
                
                <Link to={"/cart"}>
                    <CartWidget/>
                </Link>
                    

                </nav>
            </header>
        </>
    )
}


export default NavBar