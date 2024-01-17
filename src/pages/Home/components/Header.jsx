import Home from "../../../components/Elements/Home_group/Home.jsx";
import NewArrive from "../../../components/Elements/Home_group/NewArrive.jsx";

function Header() {
  return (
    <>
      <div className="  flex  flex-col  px-5 mt-5 " id="menu">
        <Home />
        <NewArrive />
      </div>
    </>
  );
}

export default Header;
