import { Inter } from "next/font/google";
import Card from "../../components/molecules/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Card />
      <h1>test</h1>
    </div>

    //  <Card/>
  );
}
