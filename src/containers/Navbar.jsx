import * as Icon from "react-feather";
import { useEffect, useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const classNav = `
  fixed  
  top-0 
  left-0 
  right-0 
  flex 
  justify-around 
  text-black 
  text-[1.2rem] 
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
    <nav className={`${visible ? "" : isNavActive} ${classNav}`}>
      <Logo />
      <ListMenu isActive={isActive} />
      <SearchAndCart />
    </nav>
  );
}

function Logo() {
  return (
    <div className="text-[1.2rem] uppercase">
      <a href={"#"}> UI LOVER</a>
    </div>
  );
}

const ListMenu = ({ isActive }) => {
  return (
    <div
      className={`ms-[20px] flex gap-[50px] ${
        isActive ? "active" : ""
      } font-light`}
    >
      <a href={"#menu"} className={`hover:text-blue-500`}>
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

const SearchAndCart = () => {
  return (
    <div className="block md:flex md:gap-4 relative md:content-center ">
      <a className="w-10 h-10  rounded-full relative  flex justify-center">
        <Icon.Search className="absolute bottom-2" />
      </a>
      <a className="bg-white  w-10 h-10 shadow-md rounded-full relative  flex justify-center  ">
        <Icon.ShoppingBag className="absolute bottom-2" />
      </a>
    </div>
  );
};

export default Navbar;
