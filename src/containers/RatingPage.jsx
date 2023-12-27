import Rating from "../components/Rating";

function RatingPage() {
  return (
    <div className="w-full bg-black  text-white text-semibold flex justify-between mt-16 py-16">
      <Rating amount="08+" text1="Awesome" text2="Branches" />
      <Rating amount="40+" text1="Expert" text2="Chef" classname="border-x" />
      <Rating amount="12Y+" text1="Service" text2="Experience" />
    </div>
  );
}

export default RatingPage;
