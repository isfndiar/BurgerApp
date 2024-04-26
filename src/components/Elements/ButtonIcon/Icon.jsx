import { mockData } from "../../../services/mockData";
function IconFood() {
  return (
    <div className="flex w-[200px]  relative ">
      {mockData.map((item) => (
        <img src={item.src} className={item.className} key={item.id} alt="" />
      ))}
    </div>
  );
}

export default IconFood;
