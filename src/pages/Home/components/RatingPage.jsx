import { ratingData } from "../../../services/ratingpage.services";

export default function RatingPage() {
  return (
    <div className="w-full mt-16 py-16  flex justify-between   bg-black  text-white text-semibold overflow-hidden">
      {ratingData.map((list, x) => (
        <Rating
          key={list.id}
          text1={list.text1}
          text2={list.text2}
          amount={list.amount}
          classname={list.classname}
        />
      ))}
    </div>
  );
}

function Rating(props) {
  const { amount, text1, text2, classname } = props;
  return (
    <div
      className={`flex items-center gap-3 md:px-[100px] px-7 ${classname}  text-center  `}
    >
      <h3 className=" font-Kalnia  md:text-[4rem] text-lg ">{amount}</h3>
      <div className=" font-montserrat font-light md:text-xl text-sm ">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}
