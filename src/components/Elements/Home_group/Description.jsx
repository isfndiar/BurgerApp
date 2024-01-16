import ButtonIcon from "../ButtonIcon";

export default function Description() {
  return (
    <div className=" md:w-1/2 w-full md:mx-[3rem]    mt-20 md:mt-0 ">
      <Header />
      <Section />
      <ButtonIcon />
    </div>
  );
}

function Header() {
  return (
    <h1 className="md:text-[5rem] font-Kalnia font-semibold text-5xl mb-10 md:mb-10 ">
      SAVOR THE FLAVOR{" "}
      <span className=" relative inline-block  ">
        <img
          src="food.png"
          alt=""
          className="max-w-[100px] md:absolute md:top-[-80px] md:block hidden "
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
