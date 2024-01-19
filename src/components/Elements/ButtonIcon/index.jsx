import IconFood from "./Icon";
import Button from "./Button";
export default function ButtonIcon() {
  return (
    <div className="md:mt-5 mt-10  flex items-center md:items-stretch flex-col-reverse  md:flex-row text-xs  md:text-lg ">
      <Button classname="w-1/2 mt-10 md:mt-0">Explore Menu</Button>
      <div className=" mx-[15px] ">
        <IconFood />
        <div className="description text-sm ms-[9rem] ">
          <b className=" font-montserrat text-lg">1200+</b>
          <p>Awesome Dishes</p>
        </div>
      </div>
    </div>
  );
}
