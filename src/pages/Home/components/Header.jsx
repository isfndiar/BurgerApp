import NewArrive from "@/components/Fragments/NewArrive.jsx";
import Description from "@/components/Fragments/Description.jsx";

function Header() {
  return (
    <>
      <div className="  flex  flex-col  px-5 mt-5 " id="menu">
        <div className="flex flex-col-reverse md:flex-row  mt-[5rem] ">
          <Description />
          <Image
            src={`imgBurger.png`}
            className={`w-full max-w-sm object-cover`}
          />
        </div>
        <NewArrive />
      </div>
    </>
  );
}

function Image({ src, className }) {
  return (
    <div className=" md:w-1/2 w-full flex items-center  justify-center ">
      <img src={src} alt="" className={className} />
    </div>
  );
}

export default Header;
