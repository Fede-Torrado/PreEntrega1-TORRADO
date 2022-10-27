import {Link} from "react-router-dom"

const Category = () =>{
    return (
        <div className="category">
            <Link to='/category/cereales'>
            <div>Cereales</div>
            </Link>
            <Link to='/category/refrigerados'>
            <div>Refrigerados</div>
            </Link>
            <Link to='/category/bebidas'>
            <div>Bebidas</div>
            </Link>
        </div>
    );
}

export default Category;