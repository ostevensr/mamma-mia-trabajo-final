import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/PizzaContext";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Carro() {

    const context = useContext(AppContext);

    const letraMayuscula = (palabra) => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
      };

    return (
        <div className="carro-compras">
            
            <h2>Detalles del Pedido:</h2>

               <Card style={{ width: '25rem' }}>

              <ListGroup className="list-group-flush">
              {context.carro.map((pizza) => (
                    <ListGroup.Item key={pizza.id}>
                    <img className="foto-pizza-carrito" src={pizza.img} /> 1 {letraMayuscula(pizza.name)} por $ {pizza.price}
                    </ListGroup.Item>
                ))}

              </ListGroup>

              <Button variant="success">Ir a Pagar</Button>  

            </Card> 
            
        </div>

    );
}