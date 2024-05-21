import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <h2>Arthur Silva</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/produto/1">Produto 1</Link>
            </div>
        </header>
    );
}

export default Header;