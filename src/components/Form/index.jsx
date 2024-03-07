import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="mt-5 my-4 d-flex justify-content-center align-items-center gap-3">
      <input
        className="form-check-input"
        type="checkbox"
        id="terms"
        onChange={(e) => setIsChecked(e.target.checked)}
      />

      <div className="terms-box">
        <p style={{ visibility: isHover ? "visible" : "hidden" }}>
          You will not get real products
        </p>
        <label htmlFor="terms">I agree the terms</label>
      </div>

      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-primary"
      >
        Confirm
      </button>
    </div>
  );
};

export default Form;
