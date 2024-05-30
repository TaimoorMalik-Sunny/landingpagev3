
import { BuildCreditWithVerafi } from "@/components/view/BuildCreditWithVerafi";
import { CheckOutOverApi } from "@/components/view/CheckOutOverApi";
import { JustUsTo } from "@/components/view/JustUsTo";
import { Hero } from "@/components/view/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
       {/* <Hero/> */}
       <BuildCreditWithVerafi/>
       <CheckOutOverApi/>
   <JustUsTo/>
    </>
  
  );
}
