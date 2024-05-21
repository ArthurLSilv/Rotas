import { Link } from 'react-router-dom';

function Sobre(){
    return(
        <div>
            <h1>Página sobre a Empresa</h1>
            <span>Campo Real</span>

            <br/>

            <Link to="/">Home</Link><br/>
            <Link to="/contato">Contato</Link><br/>

            <hr/>

            <Link to="/produto/1">Acessar produto 1</Link>

        </div>
    );
}
export default Sobre;