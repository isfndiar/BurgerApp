import ButtonIcon from "../components/ButtonIcon";
import Description from "../components/Home_group/Description.jsx";
import Image from "../components/Home_group/Image.jsx";
import NewArrive from "../components/Home_group/NewArrive.jsx";

function Home() {
  return (
    <>
      <div className="flex  flex-col  px-5 mt-5 ">
        <div className="flex flex-col md:flex-row  mt-[5rem]">
          <Description>
            <ButtonIcon />
          </Description>
          <Image />
        </div>
        <NewArrive />
      </div>
    </>
  );
}

export default Home;
