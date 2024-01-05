import * as Icon from "react-feather";

export default function MenuCard({ src, name, desc, price }) {
  return (
    <div>
      <Header src={src} />
      <Section name={name} desc={desc} />
      <Footer price={price} />
    </div>
  );
}

function Header({ src }) {
  return (
    <>
      <header className="border border-white rounded-full w-1/2  md:w-[15rem] md:h-[15rem] md:px-6 md:py-5 px-3 py-2 m-auto  mb-6">
        <img src={src} alt="list-makanan" />
      </header>
    </>
  );
}

function Section({ name, desc }) {
  return (
    <section className="">
      <h1>{name}</h1>
      <p className=" font-montserrat font-light  px-3">{desc}</p>
    </section>
  );
}

function Footer({ price }) {
  return (
    <footer className="flex flex-col items-center mt-4">
      <h3 className="text-2xl font-bold font-montserrat">{price}</h3>
      <button className="flex justify-center md:w-[200px] max-w-[200px]  md:py-2 py-3 px-2 gap-3  border border-1 border-white rounded-full mt-2 hover:bg-gray-800">
        <Icon.ShoppingCart className="text-white  " />
        Add To Card
      </button>
    </footer>
  );
}
