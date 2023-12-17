export default function BtnText() {
  return (
    <div className="mt-5 flex  ">
      <button className=" bg-[var(--red)] py-2 px-3 rounded-full hover:bg-[var(--redHover)]">
        Explore Menu
      </button>
      <div className=" mx-[20px]">
        <div className="menu-food-ratings flex w-[200px]  relative ">
          <img
            src="food.png"
            alt=""
            className="w-16 absolute left-[10px] top-[-11px]"
          />
          <img
            src="food.png"
            alt=""
            className="w-16 absolute top-[-11px] left-[35px]"
          />
          <img
            src="food.png"
            alt=""
            className="w-16 absolute top-[-11px] left-[65px]"
          />
        </div>
        <div className="description text-sm ms-[9rem] ">
          <b className=" font-montserrat text-lg">1200+</b>
          <p>Awesome Dishes</p>
        </div>
      </div>
    </div>
  );
}
