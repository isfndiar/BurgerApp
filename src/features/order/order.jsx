import { useRef, useEffect, useState } from "react";
import { X } from "react-feather";
import { listFood } from "../../services/ListFood";
import Button from "../../components/Elements/ButtonIcon/Button";
export default function ListOrder({ handleClose, isClose, cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartLength = cart;

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      const products = listFood.find((product) => product.id === item.id);

      return acc + products.price * item.qty;
    }, 0);

    setTotalPrice(sum);
  }, [cart]);

  const btnRef = useRef(null);
  useEffect(() => {
    if (cartLength.length > 0) {
      btnRef.current.style.display = "inline-block";
    } else {
      btnRef.current.style.display = "none ";
    }
  }, [cartLength]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cartLength.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none ";
    }
  }, [cartLength]);
  return (
    <div
      className={`min-h-screen bg-white fixed top-0 right-0 ${
        isClose ? " w-1/2" : "w-0"
      } z-[100] max-w-md transition-all duration-300 ease-in-out shadow-md `}
    >
      <X
        className="absolute top-9 left-4 hover:cursor-pointer text-2xl"
        onClick={handleClose}
      ></X>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-20">
        <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              price
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            const products = listFood.find((product) => product.id == item.id);

            return (
              <tr
                key={`listProduct-${item.id}`}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{products.name}</td>
                <td className="px-6 py-4">{item.qty}</td>
                <td className="px-6 py-4">
                  $
                  {(item.qty * products.price).toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            );
          })}

          <tr ref={totalPriceRef}>
            <td className="px-6 py-4" colSpan={2}>
              <b>Total Price</b>
            </td>
            <td className="px-6 py-4">
              <b>
                $
                {totalPrice.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
      <div className=" flex justify-center text-center mt-10 transition-all duration-300">
        <Button
          ref={btnRef}
          classname={`text-sm m-auto  ${isClose ? "opacity-1" : "opacity-0"}`}
        >
          Order Now
        </Button>
      </div>
    </div>
  );
}
