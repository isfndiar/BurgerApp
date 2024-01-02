import { content } from "../../services/newMenu";
import NewMenu from "./NewMenu";
function NewArrive() {
  return (
    <div className=" mt-[6rem] px-[5rem]">
      <b className="font-montserrat text-3xl font-semibold">NewArrive</b>
      <div
        className="listMenu flex justify-between"
        style={
          content
            ? { display: "flex", justifyContent: "space-between" }
            : { display: "block", textAlign: "center", paddingTop: "3rem" }
        }
      >
        <Body isNew={content} />
      </div>
    </div>
  );
}

const Body = ({ isNew }) => {
  return (
    <>
      {isNew &&
        content.map((item) => (
          <NewMenu
            key={item.id}
            src={item.src}
            title={item.title}
            alt={item.alt}
            price={item.price}
          />
        ))}

      {!isNew && (
        <>
          <p className=" text-3xl font-poppins text-semibold  flex justify-center mt-5">
            No new Menu Currently
          </p>
        </>
      )}
    </>
  );
};

export default NewArrive;
