export default function ChooseCard(props) {
  const { src, alt, name, title } = props;
  return (
    <div className=" w-full max-w-sm flex flex-col  items-center  py-12 px-10 bg-white rounded-xl  shadow-md ">
      <Image src={src} alt={alt} />
      <Description name={name} title={title} />
    </div>
  );
}

function Image({ src, alt }) {
  return (
    <div className=" rounded-full w-[7rem] h-[7rem] bg-[var(--primary)] shadow-sm">
      <img src={src} alt={alt} className="" />
    </div>
  );
}

function Description({ name, title }) {
  return (
    <div className="mt-10 flex flex-col justify-between ">
      <h1 className="md:text-2xl text-lg font-Kalnia font-bold mb-3">{name}</h1>
      <p className="md:text-lg text-sm font-light">{title}</p>
    </div>
  );
}

ChooseCard.Image = Image;
ChooseCard.Description = Description;
