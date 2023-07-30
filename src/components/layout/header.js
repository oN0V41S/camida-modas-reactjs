import './header.css';

function Header (){
    return(
        <header className="header"> 

            <div className='img'>
            </div>
            <nav className="nav">
                <button className="nav-link">Catálogo</button>
                <button className="nav-link">Sobre</button>
            </nav>
        </header>
    )
}

export default Header;