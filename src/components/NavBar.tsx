import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <header className='header'>
                <div className='navBar'>
                    <div>
                            <Link className='logo' to='/'>
                                EMERSON
                            </Link>
                    </div>
                    <nav>
                        <Link to='/' >Inicio</Link>
                        <Link to='/about' >Sobre</Link>
                        <Link to='/projects' >Projetos</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default NavBar