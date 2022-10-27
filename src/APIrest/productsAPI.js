const products = [
  {
    id: "01",
    nombre: "Almohaditas con Avellana x 250gr",
    categoria: "cereales",
    descripcion:
      "Irresistibles almohaditas de cereal de avena rellenas con avellana. Realizan aporte de hidratos de carbono, fibras.",
    imagen: "almohaditas.jpg",
  },
  {
    id: "02",
    nombre: "Fibras Bastoncitos de Salvado x 250gr",
    categoria: "cereales",
    descripcion:
      "Puro aporte de fibras que favorecen en caso de constipación, regularizando la función intestinal.",
    imagen: "bastoncitos-salvado.jpg",
  },
  {
    id: "03",
    nombre: "Bolitas Cereal de Chocolate x 250gr",
    categoria: "cereales",
    descripcion: "Bolitas de harina de maíz con sabor a chocolate.",
    imagen: "Bolitas_Cereal_Chocolate.jpg",
  },
  {
    id: "04",
    nombre: "Ositos de Frutilla x 250gr",
    categoria: "cereales",
    descripcion:
      "Cereales fortificados para el desayuno con forma de ositos, sabor frutilla.",
    imagen: "Ositos_Frutilla.jpg",
  },
  {
    id: "05",
    nombre: "Queso Cremoso x 500gr - FELICES LAS VACAS",
    categoria: "refrigerados",
    descripcion: "Queso alternativo a base de almendras 'Felices las vacas'.",
    imagen: "Queso_Cremoso_FELICES LAS VACAS.png",
  },
  {
    id: "06",
    nombre: "Muzzalmendra x 500gr - FELICES LAS VACAS",
    categoria: "refrigerados",
    descripcion: "Queso alternativo a base de almendras 'Felices las vacas'.",
    imagen: "muzzalmendras.png",
  },
  {
    id: "07",
    nombre: "Untable de Almendras Clásico x 200gr - FELICES LAS VACAS",
    categoria: "refrigerados",
    descripcion:
      "Queso untable estilo 'Philadelphia' a base de almendras. Sabor original x200gr Felices Las Vacas",
    imagen: "untables_clasico.png",
  },
  {
    id: "08",
    nombre: "Hummus de Garbanzos x 220gr - FELICES LAS VACAS",
    categoria: "refrigerados",
    descripcion: "Hummus de Garbanzos 220gr. Felices Las Vacas",
    imagen: "hummus-de-garbanzos.jpeg",
  },
  {
    id: "09",
    nombre: "Leche de Quinoa Agroecológica x 1 Lt - BIBA",
    categoria: "bebidas",
    descripcion: "Bebida Vegetal a base de quinoa  de origen nacional, cultivada en forma agroecológica.",
    imagen: "leche_de_quinoa.jpg",
  },
  {
    id: "10",
    nombre: "Jugo de Arandanos 1.5 Lts - CUARTO CRECIENTE",
    categoria: "bebidas",
    descripcion: "Jugo de arándanos con stevia con chia - CUARTO CRECIENTE",
    imagen: "Jugo_de_Arandanos.jpg",
  },
  {
    id: "11",
    nombre: "Leche de Almendras Original x 1 lt TRATENFU",
    categoria: "bebidas",
    descripcion: "Leche de Almendras Sin Tacc Sin Conservantes - TRATENFU",
    imagen: "Leche_de_Almendras.png",
  },
  {
    id: "12",
    nombre: "Not Milk Chocolate x 1 Lt. - NOTCO",
    categoria: "bebidas",
    descripcion: "Leche a base de plantas",
    imagen: "NotMilk.png",
  },
];

export const getProduct = (id) => {
  return products.find((prod) => prod.id === id)
}

export default products;


