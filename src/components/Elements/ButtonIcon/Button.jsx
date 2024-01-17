export default function Button({
  children,
  classname,
  defaultBtn = "bg-[var(--red)] rounded-full hover:bg-[var(--redHover)] text-white py-3 px-3",
}) {
  return (
    <button className={`  ${defaultBtn}  ${classname}  shadow-2xl text-white`}>
      {children}
    </button>
  );
}
