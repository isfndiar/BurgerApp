import { useEffect, useState } from "react";

const useTotalPrice = ({ cart, listFood }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      const products = listFood.find((product) => product.id === item.id);
      return acc + products.price * item.qty;
    }, 0);
    setTotalPrice(sum);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return { totalPrice };
};

export default useTotalPrice;
