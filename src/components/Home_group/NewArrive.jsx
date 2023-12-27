import { useEffect, useState } from "react";
import { content } from "../../services/newMenu";
import NewMenu from "./NewMenu";
function NewArrive() {
  const [isNew, setIsNew] = useState(true);

  return (
    <div className=" mt-[6rem] px-[5rem]">
      <b className="font-montserrat text-3xl font-semibold">NewArrive</b>
      <div
        className="listMenu flex justify-between"
        style={
          isNew
            ? { display: "flex", justifyContent: "space-between" }
            : { display: "block", textAlign: "center", paddingTop: "3rem" }
        }
      >
        {isNew ? (
          content.map((item) => (
            <NewMenu
              key={item.id}
              src={item.src}
              title={item.title}
              alt={item.alt}
              price={item.price}
            />
          ))
        ) : (
          <>
            <p className=" text-3xl font-poppins text-semibold  flex justify-center mt-5">
              No new Menu Currently
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default NewArrive;
