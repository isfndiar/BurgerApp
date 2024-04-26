import Button from "@/components/Elements/ButtonIcon/Button";
import ChooseCard from "@/components/Fragments/ChooseCard";
import { content } from "@/services/recomendation.services";

export default function ChooseUs() {
  return (
    <div id="service" className="text-center py-20">
      <Header />
      <Main />
      <Button classname={"mt-20 shadow-none"}>Contact Us</Button>
    </div>
  );
}

function Header() {
  return (
    <h1 className=" md:text-5xl text-3xl font-semibold font-Kalnia mb-20">
      Why Choose Us?
    </h1>
  );
}

function Main() {
  return (
    <ul className="flex justify-center flex-wrap gap-10">
      {content.map((item) => (
        <ChooseCard
          key={item.id}
          src={item.src}
          alt={`${item.name} photo`}
          name={item.name}
          title={item.title}
        ></ChooseCard>
      ))}
    </ul>
  );
}
