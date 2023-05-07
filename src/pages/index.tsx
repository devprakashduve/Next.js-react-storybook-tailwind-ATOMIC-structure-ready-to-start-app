import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import Card from "../../components/molecules/card";
import Header from "../../components/organisms/header";
import Button from "../../components/atoms/button";
import Footer from "../../components/organisms/footer";
import Banner from "../../components/molecules/banner";


import { useState } from "react";
import ArrayVisualization from "../../components/organisms/gamePage";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  const [dataV, setDataV] = useState([2, 4, 6, 8]);

  const handleClick = () => {
    setDataV(dataV.map(value => value + 1));
  };
  return (
    <>
      <Header title={""} />
      {/* <Banner imgSrc={""}/> */}
      <ArrayVisualization/>
      <button onClick={handleClick}>Increment Data</button>
      <div className="h-screen">
        <p>
          {session && session?.user?.email
            ? "Logged In  as=> " + session?.user?.email + ""
            : "logged out"}{" "}
          <br />
        </p>
      </div>
      <Footer />
    </>
  );
}
