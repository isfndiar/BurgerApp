import { listFood } from "../../../services/ListFood";
import Loader from "../../../utils/Loader";
// import MenuCard from "../../../components/Fragments/MenuCard";

import { Suspense, lazy, React } from "react";
const MenuCard = lazy(() => import("../../../components/Fragments/MenuCard"));
const Menu = ({ handleCart }) => {
  return (
    <div className="bg-[var(--black)]  text-white py-20 mt-20" id="food">
      <Header />
      <div className="flex flex-wrap justify-center text-center px-7 ">
        {listFood.map((item) => (
          <Suspense key={item.id} fallback={<Loader />}>
            <MenuCard
              src={item.img}
              name={item.name}
              desc={item.desc}
              price={item.price}
              id={item.id}
              handleCart={handleCart}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

function Header() {
  return (
    <h1 className="text-center md:text-7xl sm:text-6xl text-4xl px-5 font-Kalnia mb-6">
      Dive Into A World of Delights
    </h1>
  );
}

export default Menu;
