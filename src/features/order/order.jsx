import React from "react";
import { X } from "react-feather";
import { listFood } from "../../services/ListFood";
export default function ListOrder({ handleClose, isClose, cart }) {
  return (
    <div
      className={`min-h-screen bg-white fixed top-0 right-0 ${
        isClose ? " w-1/2" : "w-0"
      } z-[100] max-w-md transition-all duration-300 ease-in-out `}
    >
      <X
        className="absolute top-9 left-4 hover:cursor-pointer text-2xl"
        onClick={handleClose}
      ></X>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>price</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            const products = listFood.find((product) => product.id == item.id);

            return (
              <tr key={`listProduct-${item.id}`}>
                <td>{products.name}</td>
                <td>{products.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
