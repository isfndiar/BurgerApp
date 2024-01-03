export default function Button({ children, classname }) {
  return (
    <button
      className={`bg-[var(--red)] py-3 px-3 rounded-full hover:bg-[var(--redHover)] ${classname}  shadow-2xl text-white`}
    >
      {children}
    </button>
  );
}
