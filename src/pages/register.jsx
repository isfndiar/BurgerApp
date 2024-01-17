import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import UseBackHome from "../features/useBackHome";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <UseBackHome />
      <AuthLayouts title="Register" type="register">
        <FormRegister text="Register" />
      </AuthLayouts>
    </div>
  );
}
