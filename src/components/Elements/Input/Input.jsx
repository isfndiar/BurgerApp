import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      name={name}
      id={name}
    />
  );
});

export default Input;
