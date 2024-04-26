import * as Icon from "react-feather";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTotalCart from "../../hooks/useTotalCart";
import { styles } from "../../styles";
import useHandleScroll from "../../hooks/useHandleScroll";

function Navbar(props) {
  const { handleOpenCart } = props;
  const [isActive, setIsActive] = useState(false);
  const { totalCart } = useTotalCart();
  const { visible } = useHandleScroll();
  const isNavActive = "translate-y-[-100px]";
  const { fixedTop, flexAround, transitionDefault } = styles;

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav
      className={`${
        visible ? "" : isNavActive
      } ${fixedTop} ${flexAround} ${transitionDefault}text-black text-sm w-full py-5 z-50 backdrop-blur-md bg-white/80 shadow-md`}
    >
      <div className="text-[1.2rem] uppercase  flex items-center">
        <a href={"#"}> UI LOVER</a>
      </div>
      <ListMenu
        className={`font-light hidden md:gap-[50px] md:flex md:items-center md:ms-[20px] md:text-lg`}
      />

      <SearchAndCart
        isActive={isActive}
        handleOpenCart={handleOpenCart}
        handleClick={handleClick}
      >
        {isActive ? (
          <ListMenu
            className={`md:hidden w-[120px] bg-white absolute top-10 right-0 flex flex-col`}
          />
        ) : null}
      </SearchAndCart>
    </nav>
  );
}

const ListMenu = ({ className }) => {
  return (
    <div className={`${className}  `}>
      <a href={"#menu"} className={`${styles.hoverBgRed}`}>
        Menu
      </a>
      <a href={`#food`} className={`${styles.hoverBgRed}`}>
        Food
      </a>
      <a href={`#service`} className={`${styles.hoverBgRed}`}>
        Services
      </a>
      <a href={`#about`} className={`${styles.hoverBgRed}`}>
        About Us
      </a>
    </div>
  );
};

const SearchAndCart = ({ handleOpenCart, handleClick, children, isActive }) => {
  return (
    <div className=" flex gap-4 relative items-center  ">
      <a className="w-10 h-10  rounded-full relative  flex justify-center ">
        <Icon.Search className="absolute bottom-2 md:inline hidden" />
      </a>
      <a
        onClick={handleOpenCart}
        className="bg-white  w-10 h-10 shadow-md rounded-full relative  flex justify-center me-4 md:me-0  "
      >
        <div className="rounded-full bg-red-600 text-white absolute z-50"></div>
        <Icon.ShoppingBag className={` absolute bottom-2 cursor-pointer `} />
      </a>
      <Link to={`/login`} className="button-login ">
        Login
      </Link>
      <button
        className="inline-block md:hidden group relative"
        onClick={handleClick}
      >
        <span
          className={`background-line origin-top-left transition-all ${
            !isActive ? "" : "rotate-45"
          }`}
        ></span>
        <span
          className={`background-line transition-all ${
            !isActive ? "" : "scale-0"
          }`}
        ></span>
        <span
          className={`background-line transition-all origin-bottom-left ${
            !isActive ? "" : "-rotate-45"
          }`}
        ></span>
        {children}
      </button>
    </div>
  );
};

export default Navbar;
