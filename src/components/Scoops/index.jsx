import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card";

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3040/scoops").then((res) => setData(res.data));
  }, []);
  return (
    <div className="container my-5">
      <h1>Ice Creams</h1>
      <p>
        Each <span className="text-success"> 5$</span>
      </p>
      <h3>
        Price{" "}
        <span data-testid="total" className="text-success">
          {basket.length * 5}
        </span>
        <span className="text-success">$</span>
      </h3>

      <div className="row gap-5 justify-content-between mt-4 p-3">
        {data?.map((i) => (
          <Card basket={basket} setBasket={setBasket} item={i} key={i.name} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
