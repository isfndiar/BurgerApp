import {
  About,
  ChooseUs,
  Header,
  Menu,
  Navbar,
  RatingPage,
  HearFromPeople,
  Footer,
} from "./components/index";
import ListOrder from "../../features/order/order";
import { useState } from "react";
export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const handleOpenCart = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((product) =>
          product.id === id ? { ...product, qty: product.qty + 1 } : product
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <Navbar handleOpenCart={handleOpenCart} />

      <ListOrder
        handleClose={() => setIsOpen((isOpen) => !isOpen)}
        isClose={isOpen}
        cart={cart}
      />
      <Header />
      <RatingPage />
      <About />
      <Menu handleCart={handleCart} />
      <ChooseUs />
      <HearFromPeople />
      <Footer />
      {/* <ModalCheckout/> */}
    </>
  );
}
