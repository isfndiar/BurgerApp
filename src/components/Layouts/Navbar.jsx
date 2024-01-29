import * as Icon from "react-feather";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTotalCart from "../../hooks/useTotalCart";

function Navbar(props) {
  const { handleOpenCart } = props;
  const [isActive, setIsActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const { totalCart } = useTotalCart();

  const classNav = `
  fixed  
  top-0 
  left-0 
  right-0 
  flex 
  w-full
  justify-around 
  text-black 
  text-sm
  py-[1.5rem] 
  px-[5%] z-50 
  
  transition-all 
  ease-in-out  
  duration-500 
  `;

  const isNavActive = "translate-y-[-100px]";

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = prevScrollPos > currentScrollPos;
    setPrevScrollPos(currentScrollPos);
    setVisible(isVisible);
    // if (window.scrollY == 200 || window.scrollY > 200) {
    //   setVisible(!true);
    // } else if (window.scrollY == 0) {
    //   setIsActive(false);
    //   setVisible(true);
    // }
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`${
        visible ? "" : isNavActive
      } ${classNav} backdrop-blur-md bg-white/80 shadow-md`}
    >
      <Logo />
      <ListMenu isActive={isActive} />
      <SearchAndCart
        handleOpenCart={handleOpenCart}
        // isActive={isActive}
        handleClick={handleClick}
      />
    </nav>
  );
}

function Logo() {
  return (
    <div className="text-[1.2rem] uppercase  flex items-center">
      <a href={"#"}> UI LOVER</a>
    </div>
  );
}

const ListMenu = ({ isActive }) => {
  return (
    <div
      className={` font-light   flex gap-[50px] ${
        isActive
          ? "bg-red-500 flex-col absolute top-0 w-1/2 min-h-screen "
          : "hidden md:flex md:items-center ms-[20px] md:text-lg"
      } `}
    >
      <a href={"#menu"} className={`hover:text-blue-500 `}>
        Menu
      </a>
      <a href={`#food`} className={`hover:text-blue-500`}>
        Food
      </a>
      <a href={`#service`} className={`hover:text-blue-500`}>
        Services
      </a>
      <a href={`#about`} className={`hover:text-blue-500`}>
        About Us
      </a>
    </div>
  );
};

const SearchAndCart = ({ handleOpenCart, handleClick }) => {
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
      <button className="inline-block md:hidden" onClick={handleClick}>
        <span className="background-line"></span>
        <span className="background-line"></span>
        <span className="background-line"></span>
      </button>
      ;
    </div>
  );
};

export default Navbar;
