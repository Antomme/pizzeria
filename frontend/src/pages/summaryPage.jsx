import Header from "../components/header";
import { Footer } from "../components/footer";

export default function SummaryPage({ order }) {
    // Falls order leer ist
    if (!order) order = {};

    // Alle Pizzen, die bestellt wurden (Menge > 0)
    const orderedItems = Object.entries(order).filter(([_, amount]) => amount > 0);

    // Total berechnen
    const total = orderedItems.reduce((sum, [pizzaName, amount]) => {
        // Preis pro Pizza muss hier evtl. noch von Backend geladen werden
        const price = 9.5; // Beispiel, falls du keine Pizza-Liste hast
        return sum + amount * price;
    }, 0);

    return (
        <div>
            <Header input="Order Summary" />
            <div className="container">
                {orderedItems.map(([pizzaName, amount]) => (
                    <div key={pizzaName} className="pizza-summary-item">
                        {pizzaName} x {amount} = {amount * 9.5} €
                    </div>
                ))}
                <div className="total">Total: {total.toFixed(2)} €</div>
            </div>
            <Footer />
        </div>
    );
}
