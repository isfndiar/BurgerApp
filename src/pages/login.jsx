import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <AuthLayouts title="Login" type="login">
        <FormLogin text="Login" />
      </AuthLayouts>
    </div>
  );
}
