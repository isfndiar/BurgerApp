import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";

export default function UseBackHome() {
  const transitionBack = "transition-all duration-200 ease-in-out";
  const hoverBack = "hover:bg-white hover:border hover:border-black";
  const flexCenter = "flex justify-center items-center";
  return (
    <Link
      to={"/"}
      className={`w-10 h-10 rounded-full absolute top-[129px] left-[459px] ${flexCenter} ${transitionBack} ${hoverBack}`}
    >
      <ArrowLeft className=" text-gray-700" />
    </Link>
  );
}
