import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3040/toppings")
      .then((res) => setData(res.data));
  }, []);

  const handleChange = (isChecked, item) => {
    isChecked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };
  return (
    <div className="container">
      <h1>Toppings</h1>
      <p>
        Each <span className="text-success">3$</span>
      </p>

      <h3>
        Toppings{" "}
        <span data-testid="total" className="text-success">
          {basket.length * 3}
        </span>{" "}
        $
      </h3>

      <div className="row gap-3 p-3">
        {data?.map((i) => (
          <div key={i.name} className="top-card" style={{ width: "150px" }}>
            <label
              htmlFor={i.name}
              className="d-flex flex-column align-items-center gap-3"
            >
              <img height={100} src={i.imagePath} alt="topping-img" />
              <p className="text-nowrap text-center">{i.name}</p>
            </label>

            <input
              onChange={(e) => handleChange(e.target.checked, i)}
              type="checkbox"
              id={i.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
