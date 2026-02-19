import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Menu from "../components/menu";
import { Footer } from "../components/footer";

export default function OrderPage({ order, setOrder }) {
    const navigate = useNavigate();

    const handleAmountChange = (pizzaName, amount) => {
        setOrder(prev => ({
            ...prev,
            [pizzaName]: amount
        }));
    };

    const handleSubmit = () => {
        navigate("/summary");
    };

    return (
        <div>
            <Header input="Order Now!" />
            <div className="container">
                <Menu
                    showAmount={true}
                    order={order}
                    onAmountChange={handleAmountChange} // <-- weitergeben
                />
                <button onClick={handleSubmit}>Order!</button>
            </div>
            <Footer />
        </div>
    );
}
