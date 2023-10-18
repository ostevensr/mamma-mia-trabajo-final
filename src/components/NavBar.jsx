import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no_active");

    return (
        <Navbar className='pers-navbar'>
            <Container fluid>
            
                <Navbar.Brand>
                    <NavLink className={setActiveClass} to="/home"> <img className="icono-navbar" src="./src/assets/pizza.png"/> Pizzería Mamma Mía</NavLink>
                </Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">

                    <div className="cont-links-navbar">

                        <NavLink className={setActiveClass} to="/carro"> <img className="icono-navbar" src="./src/assets/compra.png"/> Carro de Compra </NavLink>
                    </div> 

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavBar;