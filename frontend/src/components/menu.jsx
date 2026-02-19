import { useEffect, useState } from "react";
import PizzaItem from "./pizzaItem";

export default function Menu({ order, onAmountChange }) {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/pizzas")
            .then(res => res.json())
            .then(data => setPizzas(data._embedded.pizzas))
            .catch(console.error);
    }, []);

    return (
        <div className="menu">
            {pizzas.map(pizza => (
                <PizzaItem
                    key={pizza.name}
                    pizza={pizza}
                    amount={order[pizza.name] || 0} // hier wird der Wert angezeigt
                    onAmountChange={onAmountChange} // Callback weitergeben
                />
            ))}
        </div>
    );
}
