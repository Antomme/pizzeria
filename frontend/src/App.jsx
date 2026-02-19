import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from './pages/welcomePage';
import OrderPage from './pages/orderPage';
import SummaryPage from './pages/summaryPage';

export default function App() {
  const [order, setOrder] = useState({}); // z.B. { "Margherita": 2 }

  const router = createBrowserRouter([
    { path: "/", element: <WelcomePage /> },
    { path: "/order", element: <OrderPage order={order} setOrder={setOrder} /> },
    { path: "/summary", element: <SummaryPage order={order} /> } // <-- hier übergeben!
  ]);

  return <RouterProvider router={router} />;
}
