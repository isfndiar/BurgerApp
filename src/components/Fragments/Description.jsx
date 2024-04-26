import ButtonIcon from "../Elements/ButtonIcon";

export default function Description() {
  return (
    <div className=" md:w-1/2 w-full md:mx-[3rem]    mt-20 md:mt-0 ">
      <h1 className="md:text-[5rem]  font-Kalnia font-semibold text-5xl mb-10 md:mb-10 ">
        Lets Go Eat Burger
        <span className=" relative inline-block  ">
          <img
            src="food.png"
            alt=""
            className="max-w-[100px]  md:absolute md:top-[-80px] md:block hidden "
          />
        </span>
      </h1>
      <p className=" font-poppins font-light  md:w-[30rem] w-30  ">
        if you want eat burger, please contact MacDonald .
      </p>
      <ButtonIcon></ButtonIcon>
    </div>
  );
}
