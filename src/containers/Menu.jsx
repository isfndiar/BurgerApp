import { listFood } from "../services/ListFood";
import MenuCard from "../components/Fragments/MenuCard";
export default function Menu() {
  return (
    <div className="bg-black min-h-screen text-white py-20 mt-20" id="menu">
      <h1 className="text-center text-7xl font-Kalnia mb-6">
        Dive Into A World of Delights
      </h1>
      <ul className="flex flex-wrap  justify-center text-center px-10">
        {listFood.map((item) => (
          <li key={item.id} className=" w-1/4 px-2 mt-10">
            <MenuCard
              src={item.img}
              name={item.name}
              price={item.price}
              desc={item.desc}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
