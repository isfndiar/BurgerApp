import { listFood } from "../../../services/ListFood";
import Loader from "../../../utils/Loader";
// import MenuCard from "../../../components/Fragments/MenuCard";

import { Suspense, lazy, React } from "react";
const MenuCard = lazy(() => import("../../../components/Fragments/MenuCard"));
const Menu = ({ handleCart }) => {
  return (
    <div
      className="bg-[var(--black)] min-h-screen text-white py-20 mt-20"
      id="food"
    >
      <Header />
      <ul className="flex flex-wrap justify-center text-center md:px-36 ">
        {listFood.map((item) => (
          <li key={item.id} className=" md:w-1/4 w-1/2 px-2  mt-10">
            <Suspense fallback={<Loader />}>
              <MenuCard
                src={item.img}
                name={item.name}
                desc={item.desc}
                price={item.price}
                id={item.id}
                handleCart={handleCart}
              />
            </Suspense>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Header() {
  return (
    <h1 className="text-center text-7xl px-5 font-Kalnia mb-6">
      Dive Into A World of Delights
    </h1>
  );
}

export default Menu;
