import Button from "../components/ButtonIcon/Button";

export default function About() {
  return (
    <div className="min-h-screen  w-full  flex flex-col-reverse md:flex-row justify-between items-center md:px-24 px-3 md:mt-20 mt-10">
      <Image />
      <Description />
    </div>
  );
}

function Image() {
  return (
    <div className="relative bg-cover   w-[30rem] h-[45rem]  rounded-full ">
      <img
        src="food-about.jpg"
        alt="foto makanan"
        className=" h-full rounded-full"
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
        <h3 className="text-xl text-red-600">About Us</h3>
        <h1 className=" font-Kalnia font-bold text-5xl leading-[1.4]">
          Where quality meets Flavo
        </h1>
      </header>
      <main className="mb-6 px-6 ">
        <section className="mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          dignissimos delectus et, a corrupti nemo facere vel perspiciatis
          necessitatibus consequatur.
        </section>
        <section className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
          numquam?
        </section>
        <Button classname={"mt-16"}>Explore More</Button>
      </main>
    </div>
  );
}
