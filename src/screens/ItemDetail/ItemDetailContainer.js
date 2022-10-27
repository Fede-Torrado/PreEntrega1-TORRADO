import NavBar from "../../Components/home/navbar/Nav-Bar";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct } from "../../APIrest/productsAPI";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="productContainer">
          <div>
            {/* <img src={require('../../assets/img/'+ product.imagen)} alt={product.nombre} width="200px"/> */}
          </div>
          <h3>{product.nombre}</h3>
          <p>{product.descripcion}</p>
          <div className="buttons">
            <Button variant="primary">Comprar</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
