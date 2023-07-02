import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import Card from "../../components/molecules/card";
import Header from "../../components/organisms/header";
import Button from "../../components/atoms/button";
import Footer from "../../components/organisms/footer";
import Banner from "../../components/molecules/banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Header title={""} />
      <Banner imgSrc={""}/>
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
