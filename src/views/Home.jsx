import { useState, useEffect } from "react";
import { useContext } from "react";
import BannerPizzas from "../components/BannerPizzas";
import { AppContext } from "../Context/PizzaContext";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default () => {

  const context = useContext(AppContext);

  let totalPizzas = context.pizzas

  console.log(totalPizzas);

  const letraMayuscula = (palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  };

  return (

    <>
      <div className="home">
        <BannerPizzas />

        <div className="cards-pizzas">

        { totalPizzas ? totalPizzas.map((pizza) => (
            <Card key={pizza.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pizza.img} />
              <Card.Body>

                <Card.Title>{letraMayuscula(pizza.name)}</Card.Title>

                <Card.Text>
                  Ingredientes:
                </Card.Text>

              </Card.Body>
              <ListGroup className="list-group-flush">

                {pizza.ingredients.map((ingrediente, index) => (
                  <ListGroup.Item key={index}>
                    <img className="icono-navbar" src="./src/assets/ingredientes.png"/> {letraMayuscula(ingrediente)}
                  </ListGroup.Item>
                ))}

              </ListGroup>

              <Card.Body className="botones-card">

                <Button variant="primary">Ver Más <img className="icono-navbar" src="./src/assets/ojos.png"/></Button>
                <Button variant="danger">Añadir <img className="icono-navbar" src="./src/assets/compra.png"/></Button>

              </Card.Body>

            </Card>

          )): <Card><Card.Title>Cargando</Card.Title></Card>}

        </div>

      </div>

    </>

  );
};
