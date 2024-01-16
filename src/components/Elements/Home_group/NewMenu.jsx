import React from "react";
import * as Icon from "react-feather";

function NewMenu(props) {
  return (
    <div className="mt-[2rem] flex bg-white rounded-full shadow-3xl w-[20rem] ">
      <img
        src={props.src}
        alt={props.alt}
        className="rounded-full w-[8rem] h-[8rem] object-cover object-center border-[var(--primary)] border-[10px] me-5"
      />
      <div className=" font-poppins flex items-center">
        <div className="text">
          <p className="text-semibold">{props.title}</p>
          <p className=" text-red-500 text-2xl">{props.price}</p>
        </div>
        <div className="iconBag ms-5 w-[2.5rem] h-[2.5rem] bg-black rounded-full flex items-center justify-center">
          <Icon.ShoppingCart className="text-white  " />
        </div>
      </div>
    </div>
  );
}

export default NewMenu;
