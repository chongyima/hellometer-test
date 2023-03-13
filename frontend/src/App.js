import "./App.scss";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
function App() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/orders/all")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <div className="App">
      <Home orders={orders} />
    </div>
  );
}

export default App;
