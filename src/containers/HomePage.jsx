import ButtonIcon from "../components/ButtonIcon";
import Home from "../components/Home_group/Home.jsx";
import NewArrive from "../components/Home_group/NewArrive.jsx";

function HomePage() {
  return (
    <>
      <div className="flex  flex-col  px-5 mt-5 ">
        <Home>
          <Home.Description>
            <ButtonIcon />
          </Home.Description>
          <Home.Image />
        </Home>
        <NewArrive />
      </div>
    </>
  );
}

export default HomePage;
