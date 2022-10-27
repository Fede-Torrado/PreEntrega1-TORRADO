import Home from './home/Home';
import NavBar from '../Components/home/navbar/Nav-Bar';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>   
                <Route path="/*" element={<div><NavBar/><h1>404</h1><h2>Page not found</h2></div>}></Route>   
                <Route path="/category/:cat" element={<Home/>}></Route>   
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>   
            </Routes>    
        </BrowserRouter>
);

}

export default Router;