import Image from "next/image";
import Navbar from "./components/navbar";
import SignIn from "./components/Signin-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <SignIn />
    </>
  );
}
