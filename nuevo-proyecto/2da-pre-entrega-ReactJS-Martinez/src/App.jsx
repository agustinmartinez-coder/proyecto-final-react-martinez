import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Carrusel from "./components/Carrusel/Carrusel";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import FooterPag from "./components/FooterPag/FooterPag";




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/continente/:continenteId' element={<ItemListContainer />} />
          <Route path='/Item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          <Route path= '/tasks/add' element = {<addTask/>} /> 
        </Routes>
      </BrowserRouter>

      <br />
      <Carrusel />
      <br />
      <FooterPag />
    </div>
  );
}

export default App;
