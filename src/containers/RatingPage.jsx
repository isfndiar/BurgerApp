const listNew = [
  {
    id: crypto.randomUUID(),
    text1: "Awesome",
    text2: "Branches",
    amount: "08+",
  },
  {
    id: crypto.randomUUID(),
    text1: "Expert",
    text2: "Chef",
    amount: "40+",
  },
  {
    id: crypto.randomUUID(),
    text1: "Service",
    text2: "Experience",
    amount: "12Y+",
  },
];

export default function RatingPage() {
  return (
    <div className="w-full bg-black  text-white text-semibold flex justify-between mt-16 py-16">
      {listNew.map((list, x) => (
        <Rating
          key={x}
          text1={list.text1}
          text2={list.text2}
          amount={list.amount}
        />
      ))}
    </div>
  );
}

function Rating(props) {
  const { amount, text1, text2, classname, key } = props;
  return (
    <div
      key={key}
      className={`row flex items-center gap-3   px-[100px] ${classname} text-center `}
    >
      <h3 className=" font-Kalnia text-[4rem]">{amount}</h3>
      <div className=" font-montserrat font-light">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}
