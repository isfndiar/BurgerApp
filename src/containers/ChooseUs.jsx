import ChooseCard from "../components/Fragments/ChooseCard";

const content = [
  {
    src: "food.png",
    name: "Hot Deal & Offers",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing  elit. Iure libero alias, deleniti ex deserunt quod nemo praesentium consequuntur cum velit!",
  },
  {
    src: "food.png",
    name: "Experience Chef",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, consequuntur.",
  },
  {
    src: "food.png",
    name: "Fastest Delivery",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, consequuntur.",
  },
];

export default function ChooseUs() {
  return (
    <div className="h-screen text-center py-20">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <h1 className=" text-5xl font-semibold font-Kalnia mb-20">
      Why Choose Us?
    </h1>
  );
}

function Main() {
  return (
    <ul className="flex md:px-32 md:flex-nowrap flex-wrap gap-10">
      {content.map((item, x) => (
        <>
          <ChooseCard key={x}>
            <ChooseCard.Image src={item.src} alt={`${item.name} photo`} />
            <ChooseCard.Description name={item.name} title={item.title} />
          </ChooseCard>
        </>
      ))}
    </ul>
  );
}
