import React from "react";

function Home({ children }) {
  return <div className="flex flex-col md:flex-row  mt-[5rem]">{children}</div>;
}

function Description({ children }) {
  return (
    <div className="desc md:w-1/2 md:mx-[3rem]  mt-20 md:mt-0 w-[300px]">
      <Header />
      <Section />
      {children}
    </div>
  );
}

function Header() {
  return (
    <h1 className="md:text-[5rem] font-Kalnia font-semibold text-[1.9rem] ">
      SAVOR THE FLAVOR{" "}
      <span className=" relative inline-block  ">
        <img
          src="food.png"
          alt=""
          className="max-w-[100px] md:absolute sm:top-[-80px] md:block hidden"
        />
      </span>
    </h1>
  );
}

function Section() {
  return (
    <p className=" font-poppins font-light  w-[30rem] ">
      Succelent slices of perfectly grilled steak, seared to a mouthwatering
      medium-rare, excude a rich , smoky aroma that fills the air.
    </p>
  );
}

function Image() {
  return (
    <div className=" w-1/2 grid justify-center">
      <img src="imgBurger.png" alt="" className="max-w-[40rem] object-cover" />;
    </div>
  );
}

Home.Description = Description;
Home.Image = Image;

export default Home;
