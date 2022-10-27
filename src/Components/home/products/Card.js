import Button from 'react-bootstrap/Button';
import Counter from './Counter'
import {Link} from 'react-router-dom';

const Card = ({nombre, descripcion, imagen, categoria, id})=>{
    return (
        <div className="productContainer">
            <div className="imgs">
                <img src={require('../../../assets/img/'+ imagen)} alt={nombre} width="200px"/>
            </div>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <Counter/>
            <div className="buttons">
                <Button variant="primary">Comprar</Button>
                <Link to={'/item/'+ id }>
                    <Button variant="outline-primary">Ver más</Button>
                </Link>
            </div>
        </div>
    )
}

export default Card;