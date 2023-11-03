import Logo from '../../assets/img/logogo.jpg'
import { Link } from 'react-router-dom'
import { Caixa, Imagem, Menu, Li } from './Style/'


function Header() {






    return (
        <Caixa>
            <Imagem src={` ${Logo}`} />
            <Menu>
                <Li>
                    <Link to='/'>inicio</Link>
                </Li>

                <Li>
                    <Link to='/filmes'>filmes</Link>
                </Li>

                <Li>
                    <Link to='/series'>series</Link>
                </Li>


            </Menu >
        </Caixa >
    )
}


export default Header 