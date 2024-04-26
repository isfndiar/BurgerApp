import Button from "../../../components/Elements/ButtonIcon/Button";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen  w-full  flex flex-col-reverse md:flex-row justify-between items-center md:px-24 px-3 md:mt-20 mt-10"
    >
      <Image />
      <Description />
    </div>
  );
}

function Image() {
  return (
    <div className="relative bg-cover  w-full max-w-[30rem] rounded-full overflow-hidden    ">
      <img
        src="food-about.jpg"
        alt="foto makanan"
        className=" h-full object-cover"
      />
      <div className="w-[15rem] h-[15rem]  absolute -bottom-10 left-0 right-0 m-auto bg-[var(--primary)] text-center rounded-full border-none text-black px-4 py-3 overflow-hidden">
        <div className=" bg-[var(--white)] shadow-md w-[13rem] h-[13rem]  rounded-full flex items-center justify-center ">
          Our Story
        </div>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className=" md:w-1/2 w-full mt-20 md:mt-0 mb-10 md:mb-0">
      <header className="p-3">
        <h3 className="text-3xl md:text-xl text-center md:text-left text-red-600">
          About Us
        </h3>
        <h1 className=" mt-5 text-center md:text-left font-Kalnia font-bold text-5xl leading-[1.4]">
          Where quality meets Flavo
        </h1>
      </header>
      <main className="mt-10 md:mt-0 mb-6 px-6 ">
        <section className="font-light md:font-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          dignissimos delectus et, a corrupti nemo facere vel perspiciatis
          necessitatibus consequatur.
          <p className="mt-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
            numquam?
          </p>
        </section>
        <Button classname={"mt-16 w-full md:w-max "}>Explore More</Button>
      </main>
    </div>
  );
}
