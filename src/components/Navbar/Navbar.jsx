import * as Icon from "react-feather";
import { useEffect, useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // const currentScrollPos = window.scrollY;
    // const isVisible = prevScrollPos > currentScrollPos;
    // setPrevScrollPos(currentScrollPos);
    // setVisible(isVisible);
    if (window.scrollY == 200 || window.scrollY > 200) {
      setVisible(!true);
    } else if (window.scrollY == 0) {
      setVisible(true);
    }
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
    <>
      <nav className={`${visible ? "" : "active"} group`}>
        <div className="logo">
          <a href={"#"}> UI LOVER</a>
        </div>

        <div className={`list-link ${isActive ? "active" : ""} font-light`}>
          <a href={"#menu"} className={`hover:text-blue-500`}>
            Menu
          </a>
          <a href={`#food`}>Food</a>
          <a href={`#service`}>Services</a>
          <a href={`#about`}>About Us</a>
        </div>
        <div className="icon-buy block md:flex md:gap-4 relative md:content-center ">
          <a className="  w-10 h-10  rounded-full relative  flex justify-center">
            <Icon.Search className="absolute bottom-2" />
          </a>
          <a className="bg-white  w-10 h-10 shadow-md rounded-full relative  flex justify-center  ">
            <Icon.ShoppingBag className="absolute bottom-2" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
