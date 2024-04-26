import * as Icon from "react-feather";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slice/CartSlice";

const MenuCard = (props) => {
  const { src, name, desc, price, handleCart, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="w-full md:max-w-[20rem] max-w-[13rem]  px-2  mt-10">
      <header className="w-1/2  md:w-[15rem] md:h-[15rem] md:px-6 md:py-5 px-3 py-2 m-auto  mb-6 border border-white rounded-full ">
        <img src={src} alt="list-makanan" />
      </header>
      <section className="">
        <h1>{name}</h1>
        <p className="text-sm md:text-md font-montserrat font-light  px-3">
          {desc}
        </p>
      </section>
      <footer className="flex flex-col items-center mt-4">
        <h3 className="text-md md:text-2xl font-bold font-montserrat">
          $
          {price.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </h3>
        <button
          onClick={() => dispatch(addToCart({ id, qty: 1 }))}
          className="flex justify-center gap-3 w-full md:max-w-[200px]   py-3 px-2   border border-1 border-white rounded-full mt-2 hover:bg-gray-800"
        >
          <Icon.ShoppingCart className="text-white  " />
          Add To Card
        </button>
      </footer>
    </div>
  );
};

export default MenuCard;
