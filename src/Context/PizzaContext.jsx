import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export default function PizzaContext({ children }) {
    const [pizzas, setPizzas] = useState(null);
    const [carro, setCarro] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        consultaPizzas();
    }, []);

    const consultaPizzas = async () => {
        try {
          const response = await fetch("/pizzas.json");
      
          if (!response.ok) {
            throw new Error(`No se cargó la api: ${response.status}`);
          }
      
          const data = await response.json();
          setPizzas(data);
          setIsLoading(false);
    
        } catch (error) {
          console.error("Error al consultar api:", error);
          setIsLoading(false);
        }
      };

    return (
        <AppContext.Provider value={{ pizzas, carro }}>
            {children}
        </AppContext.Provider>
    );
}
