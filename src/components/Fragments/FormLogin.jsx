import { useEffect, useRef, useState } from "react";
import Button from "../Elements/ButtonIcon/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";
function FormLogin(props) {
  const [loginFailed, setLoginFailed] = useState("");
  const { text } = props;
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.open("/home");
      } else {
        setLoginFailed(res.response.data);
      }
    });
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
      {/* m38rmF$ */}
      <InputForm
        type={"password"}
        placeholder={"m38rmF$"}
        name={"password"}
        label={"Password"}
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

export default FormLogin;
