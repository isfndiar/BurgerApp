import BtnIconText from "../../components/Home_group/BtnIconText.jsx";
import Description from "../../components/Home_group/Description.jsx";
import Image from "../../components/Home_group/Image.jsx";
function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row px-5 h-screen items-center ">
      <Description>
          <BtnIconText />
       </Description>
        <Image />
        
      </div>
    </>
  );
}

export default Home;
