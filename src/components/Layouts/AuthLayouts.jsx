import { Link } from "react-router-dom";
export default function AuthLayouts(props) {
  const { title, type, children } = props;
  return (
    <>
      {/* border border-black px-10 py-10 shadow-2xl */}
      <div className="w-full max-w-xs     ">
        <div className="text-3xl text-blue-600">{title}</div>
        <p className="font-medium text-black mb-4">
          Welcome, Please enter your details
        </p>

        {children}

        {/* if Have Account */}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <Link
            to={type === "login" ? "/register" : "/login"}
            className=" text-blue-600 font-bold"
          >
            {type === "login" ? "Sign Up" : "Login"}
          </Link>
        </p>
      </div>
    </>
  );
}
