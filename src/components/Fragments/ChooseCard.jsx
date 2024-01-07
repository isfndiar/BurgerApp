
export default function ChooseCard(props) {
  const { children } = props;
  return (
    <div className="flex flex-col  items-center py-5 px-3  md:py-12 md:px-10 bg-white rounded-xl w-1/3 shadow-md ">
      {children}
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
