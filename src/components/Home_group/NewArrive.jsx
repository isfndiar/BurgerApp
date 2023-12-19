import * as Icon from "react-feather";
import { content } from "../../services/newMenu";
function NewArrive() {
  return (
    <div className="px-6 mt-[6rem] px-[5rem] ">
      <b className="font-montserrat text-3xl font-semibold">NewArrive</b>
      <div className="listMenu flex justify-between">
        {content.map((item) => (
          <NewMenu
            key={item.id}
            src={item.src}
            title={item.title}
            alt={item.alt}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewArrive;

function NewMenu(props) {
  return (
    <div className="mt-[2rem] flex bg-white rounded-full shadow-3xl w-[20rem] ">
      <img
        src={props.src}
        alt={props.alt}
        className="rounded-full w-[8rem] h-[8rem] object-cover object-center border-[var(--primary)] border-[10px] me-5"
      />
      <div className=" font-poppins flex items-center">
        <div className="text">
          <p className="text-semibold">{props.title}</p>
          <p className=" text-red-500 text-2xl">{props.price}</p>
        </div>
        <div className="iconBag ms-5 w-[2.5rem] h-[2.5rem] bg-black rounded-full flex items-center justify-center">
          <Icon.ShoppingCart className="text-white  " />
        </div>
      </div>
    </div>
  );
}
