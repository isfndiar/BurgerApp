import { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  const {
    children,
    classname,
    onClick,
    defaultBtn = "bg-[var(--red)] rounded-full hover:bg-[var(--redHover)] text-white py-3 px-3",
  } = props;

  return (
    <button
      onClick={onClick}
      ref={ref}
      className={`  ${defaultBtn}  ${classname}  shadow-2xl text-white`}
    >
      {children}
    </button>
  );
});

export default Button;
