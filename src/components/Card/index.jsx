import React from "react";

const Card = ({ item, basket, setBasket }) => {
  const found = basket.filter((i) => i.name === item.name);
  const amount = found.length;

  const handleReset = () => {
    setBasket(basket.filter((i) => i.name !== item.name));
  };

  return (
    <div
      style={{ width: "190px" }}
      className="d-flex flex-column align-items-center gap-1 border rounded p-2"
    >
      <img height={100} src={item.imagePath} alt="images" />
      <span className="fs-5">{item.name}</span>

      <div className="d-flex gap-2 mt-4 align-items-center">
        <button onClick={handleReset} className="btn btn-sm btn-outline-danger">
          Reset
        </button>
        <span data-testid="amount" className="fs-2">
          {amount}
        </span>
        <button
          onClick={() => setBasket([...basket, item])}
          className="btn btn-sm btn-outline-success"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;