import * as Icon from "react-feather";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slice/CartSlice";

const MenuCard = (props) => {
  const { src, name, desc, price, handleCart, id } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <header className="border border-white rounded-full w-1/2  md:w-[15rem] md:h-[15rem] md:px-6 md:py-5 px-3 py-2 m-auto  mb-6">
        <img src={src} alt="list-makanan" />
      </header>
      <section className="">
        <h1>{name}</h1>
        <p className=" font-montserrat font-light  px-3">{desc}</p>
      </section>
      <footer className="flex flex-col items-center mt-4">
        <h3 className="text-2xl font-bold font-montserrat">
          $
          {price.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </h3>
        <button
          onClick={() => dispatch(addToCart({ id, qty: 1 }))}
          className="flex justify-center md:w-[200px] max-w-[200px]  md:py-2 py-3 px-2 gap-3  border border-1 border-white rounded-full mt-2 hover:bg-gray-800"
        >
          <Icon.ShoppingCart className="text-white  " />
          Add To Card
        </button>
      </footer>
    </div>
  );
};

// function Header({ src }) {
//   return (
//     <>

//     </>
//   );
// }

// function Section({ name, desc }) {
//   return (

//   );
// }

// function Footer({ price, handleCart, id }) {

// }

// MenuCard.Header = Header;
// MenuCard.Section = Section;
// MenuCard.Footer = Footer;

export default MenuCard;
