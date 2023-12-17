import React from "react";

function Home({ children }) {
  return (
    <>
      <div className="flex flex-col md:flex-row px-5 h-screen items-center ">
        {children}
      </div>
    </>
  );
}

export default Home;
