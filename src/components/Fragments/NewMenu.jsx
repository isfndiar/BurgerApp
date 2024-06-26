import React from "react";
import * as Icon from "react-feather";

function NewMenu(props) {
  return (
    <div className=" md:w-[20rem] mt-[2rem] pe-7  flex bg-white rounded-full shadow-3xl overflow-hidden ">
      <img
        src={props.src}
        alt={props.alt}
        className="rounded-full w-32 h-32 object-cover object-center border-[var(--primary)] border-[10px] me-1"
      />
      <div className=" font-poppins flex items-center">
        <div className="text">
          <p className="text-semibold">{props.title}</p>
          <p className=" text-red-500 text-2xl">{props.price}</p>
        </div>
        <div className="iconBag ms-5 p-2 bg-black rounded-full flex items-center justify-center">
          <Icon.ShoppingCart className="text-white  " />
        </div>
      </div>
    </div>
  );
}

export default NewMenu;
