import React from "react";
import Description from "./Description";
function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row  mt-[5rem] ">
      <Description />
      <Image />
    </div>
  );
}

function Image() {
  return (
    <div className=" md:w-1/2 w-full grid justify-center ">
      <img src="imgBurger.png" alt="" className="max-w-[40rem] object-cover" />;
    </div>
  );
}

export default Home;
