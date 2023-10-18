import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/PizzaContext";

import Button from 'react-bootstrap/Button';

export default function Carro() {

    const context = useContext(AppContext);

    const letraMayuscula = (palabra) => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
      };

    return (
        <div className="carro-compras">
            
            <h2>Detalles del Pedido:</h2>

            <div className="cont-pedidos">
                <ul>
                {context.carro.map((pizza) => (
                    <li key={pizza.id}>
                        <img className="foto-pizza-carrito" src={pizza.img} /> {letraMayuscula(pizza.name)} - $ {pizza.price}
                    </li>
                ))}
                </ul>
                <Button variant="success">Ir a Pagar</Button>  
            </div>
            
        </div>

    );
}