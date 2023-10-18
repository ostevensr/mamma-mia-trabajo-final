import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/PizzaContext";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function DetallePizza() {

    const context = useContext(AppContext);
    const { pizzaId } = useParams();

    //console.log(pizzaId);
    //console.log(context.pizzas)

    let totalPizzas = context.pizzas

    let pizzaSelected = totalPizzas && pizzaId ? totalPizzas.filter(pizza => pizza.id === pizzaId) : [];

    console.log(pizzaSelected)

    const letraMayuscula = (palabra) => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    };


    return (

        <div className="detalle-pizza">

            <div className="img-detalle-pizza">
               <img src={pizzaSelected[0].img} /> 
            </div>

            <div className="txt-detalle-pizza">

                <h1>{letraMayuscula(pizzaSelected[0].name)}</h1>

                <div className="desc-detalle-pizza">{letraMayuscula(pizzaSelected[0].desc)}</div>

                <div className="cont-ingredientes">
                
                    <h3>Ingredientes:</h3>
                        <ul>
                            {pizzaSelected[0].ingredients.map((ingrediente, index) => (<li key={index}>{letraMayuscula(ingrediente)}</li>))}
                        </ul>
                </div>

                <h2>Precio $ {pizzaSelected[0].price}</h2>

            </div>
            
            
            
            


        </div>

    );
}