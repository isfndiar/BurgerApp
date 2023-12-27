import IconFood from "./Icon";
import Button from "./Button";
export default function BtnIconText() {
  return (
    <div className="mt-5 flex  ">
      <Button />
      <div className=" mx-[15px]">
        <IconFood />
        <div className="description text-sm ms-[9rem] ">
          <b className=" font-montserrat text-lg">1200+</b>
          <p>Awesome Dishes</p>
        </div>
      </div>
    </div>
  );
}
