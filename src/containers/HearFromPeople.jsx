import Button from "../components/ButtonIcon/Button";

const content = [
  {
    id: 0,
    src: "food-about.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vel error accusamus aliquid nostrum vitae cumque consequatur deserunt vero rem, quia inventore eveniet voluptate placeat?",
    name: "Alex Graham Bell",
  },
  {
    id: 1,
    src: "food-about.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vel error accusamus aliquid nostrum vitae cumque consequatur deserunt vero rem, quia inventore eveniet voluptate placeat?",
    name: "Alex Graham Bell",
  },
];

export default function HearFromPeople() {
  return (
    <div className="bg-[var(--black)] min-h-screen text-white py-20 mt-20  ">
      <Header />
      <Body />
      <div className="text-center mt-10">
        <Button classname={"mt-10 text-sm"}>View All Testimonial</Button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <h1 className="md:text-5xl text-2xl font-Kalnia font-bold  text-center">
      Hear From People
    </h1>
  );
}

function Body() {
  return (
    <ul className="flex gap-10 mt-20 px-10">
      {content.map((item) => (
          <RecomendCard
            key={`${item.name}-${item.id}`}
            src={item.src}
            desc={item.desc}
            name={item.name}
          />
      ))}
    </ul>
  );
}

function RecomendCard({ src, name, desc }) {
  return (
    <li className=" flex items-center  gap-4 bg-[var(--blacktransparent)] border border-white rounded-full px-10 py-10">
      <div className=" w-1/2  overflow-hidden">
        <img src={src} alt="" className="rounded-full w-[12rem] h-[12rem]" />
      </div>
      <div className="w-3/4 ">
        <p className="font-light text-sm font-poppins">{desc}</p>
        <h5 className="font-bold font-poppins mt-2">{name}</h5>
      </div>
    </li>
  );
}
