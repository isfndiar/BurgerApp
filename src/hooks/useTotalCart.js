import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useTotalCart = () => {
  const cart = useSelector((state) => state.cart.data);
  const [totalCart, setTotalCart] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const sum = await cart.reduce((acc, item) => {
        return acc + item.qty;
      });
      setTotalCart(sum);

      console.log(sum);
    };
  }, [cart]);

  return { totalCart };
};

export default useTotalCart;
