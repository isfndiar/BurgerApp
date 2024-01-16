import { useEffect, useState } from "react";
import {
  About,
  ChooseUs,
  Header,
  Menu,
  Navbar,
  RatingPage,
  HearFromPeople,
  Footer,
} from "../containers";
import useLogin from "../hooks/useLogin";
export default function HomePage() {
  useLogin();

  return (
    <>
      <Navbar />
      <Header />
      <RatingPage />
      <About />
      <Menu />
      <ChooseUs />
      <HearFromPeople />
      <Footer />
    </>
  );
}
