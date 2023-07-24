import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <header className='header'>
                <div className='navBar'>
                    <div>
                            <Link className='logo' to='/'>
                                Emerson
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