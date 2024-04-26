import { content } from "@/services/newMenu";
import NewMenu from "./NewMenu";
function NewArrive() {
  return (
    <div className=" mt-24 px-20  text-center md:text-left">
      <b className="font-montserrat text-3xl font-semibold  ">NewArrive</b>
      <div
        className={`${
          content
            ? "flex justify-center md:justify-between"
            : "block text-center pt-12"
        }   flex-wrap`}
      >
        <Body isNew={content} />
      </div>
    </div>
  );
}

const Body = ({ isNew }) => {
  return (
    <>
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
        <p className=" text-3xl font-poppins text-semibold  flex justify-center mt-5">
          No new Menu Currently
        </p>
      )}
    </>
  );
};

export default NewArrive;
