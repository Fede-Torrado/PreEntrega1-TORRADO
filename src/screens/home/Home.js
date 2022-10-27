import Navbar from '../../Components/home/navbar/Nav-Bar.js';
import ItemListContainer from '../../Components/home/products/ItemListContainer.js';
import Category from '../../Components/home/category/Category'

function Home() {
  return (
    <>
      <Navbar/>
      <Category/>
      <ItemListContainer/>
    </>
  );
}

export default Home;
