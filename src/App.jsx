import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PizzaContext from "./Context/PizzaContext.jsx";

import NavBar from './components/NavBar'
import Home from './views/Home'
import DetallePizza from './views/DetallePizza';
import Carro from './views/Carro';
import NotFound from './views/NotFound';

function App() {
    const [pizzas, setPizzas] = useState([]);
    const [carro, setCarro] = useState([]);
    const sharedData = { pizzas, setPizzas, carro, setCarro };

    return (
        <>
            <div className='App'>
                <BrowserRouter>
                    
                    <PizzaContext> 
                    <NavBar />
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="/home" element={<Home/>} />
                            <Route path="pizza/:pizzaId" element={<DetallePizza/>} />
                            <Route path="/carro" element={<Carro/>} />
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </PizzaContext>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;
