import React, { useEffect, useState } from "react";
// import { Route, Routes, Navigate, Link, withRouter } from "react-router-dom";

export default function Home(props) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/orders/all")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setOrders(data);
      });
  }, []);
  return <div></div>;
}
