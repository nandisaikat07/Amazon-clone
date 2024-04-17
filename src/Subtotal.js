import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  return (
    <div className="subtotal">
      <button>Proceed to checkout</button>

      <p className="paragraph">Thanks for Shopping on Amazon</p>
    </div>
  );
}

export default Subtotal;