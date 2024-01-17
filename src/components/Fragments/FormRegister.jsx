import { useEffect, useRef, useState } from "react";
import Button from "../Elements/ButtonIcon/Button";
import InputForm from "../Elements/Input";
function FormRegister(props) {
  const [loginFailed, setLoginFailed] = useState("");
  const { text } = props;
  const handleLogin = (e) => {
    e.preventDefault();
    // const data = {
    //   username: e.target.username.value,
    //   password: e.target.password.value,
    // };

    localStorage.setItem("username", e.target.username.value);
    localStorage.setItem("password", e.target.password.value);
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type={"text"}
        placeholder={"johnd"}
        name={"username"}
        label={"Username"}
        ref={usernameRef}
      />
      <InputForm
        type={"text"}
        placeholder={"johndoe@gmail.com"}
        name={"email"}
        label={"Email"}
      />
      {/* m38rmF$ */}
      <InputForm
        type={"password"}
        placeholder={"******"}
        name={"password"}
        label={"Password"}
      />
      <InputForm
        type={"password"}
        placeholder={"*******"}
        name={"confirmpassword"}
        label={"Confirm Password"}
      />
      {loginFailed && <p className="text-red-500">{loginFailed}</p>}
      <Button
        classname="bg-blue-600 w-full mt-5"
        defaultBtn="rounded-md h-10 px-10 hover:bg-blue-400"
        type="submit"
      >
        {text}
      </Button>
    </form>
  );
}

export default FormRegister;
