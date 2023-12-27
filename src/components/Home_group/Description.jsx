function Description({ children }) {
  return (
    <div className="desc md:w-1/2 md:mx-[3rem]  mt-20 md:mt-0 w-[300px]">
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
      <p className=" font-poppins font-light  w-[30rem] ">
        Succelent slices of perfectly grilled steak, seared to a mouthwatering
        medium-rare, excude a rich , smoky aroma that fills the air.
      </p>
      {children}
    </div>
  );
}

export default Description;
