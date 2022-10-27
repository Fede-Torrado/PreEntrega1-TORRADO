import products from "../../../APIrest/productsAPI";
import Card from "./Card.js";
import { useParams } from "react-router-dom";

const Container = () => {
  const { cat } = useParams();

  return (
    <div className="container">
      {cat ? products
        .filter((prod) => prod.categoria === cat)
        .map((product, i) => (
          <Card key={i}
            id={product.id}
            nombre={product.nombre}
            descripcion={product.descripcion}
            imagen={product.imagen}
            categoria={product.categoria}
          />
        ))
    : products
    .map((product, i) => (
      <Card key={i}
        id={product.id}
        nombre={product.nombre}
        descripcion={product.descripcion}
        imagen={product.imagen}
        categoria={product.categoria}
      />
    ))
    }
    </div>
  );
};

export default Container;
