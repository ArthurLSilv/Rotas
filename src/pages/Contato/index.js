import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Página Contato</h1>
            <span>Arthur Silva</span>

            <br/>

            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>

            <hr/>

            <Link to="/produto/1">Acessar produto 1</Link>

        </div>
    );
}
export default Contato;