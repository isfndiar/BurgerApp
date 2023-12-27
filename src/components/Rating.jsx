import React from "react";

function Rating(props) {
  const { amount, text1, text2, classname } = props;
  return (
    <div
      className={`row flex items-center gap-3   px-[100px] ${classname} text-center `}
    >
      <h3 className=" font-Kalnia text-[4rem]">{amount}</h3>
      <div className=" font-montserrat font-light">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}

export default Rating;
