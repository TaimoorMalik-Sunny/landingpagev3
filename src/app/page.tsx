
import { BuildCreditWithVerafi } from "@/components/view/BuildCreditWithVerafi";
import { CheckOutOverApi } from "@/components/view/CheckOutOverApi";
import { CreditScoredashboard } from "@/components/view/CreditScoredashboard";
import { JustUsTo } from "@/components/view/JustUsTo";
import { Hero } from "@/components/view/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
       {/* <Hero/> */}
       <CreditScoredashboard/>
       <BuildCreditWithVerafi/>
       <CheckOutOverApi/>
   <JustUsTo/>
    </>
  
  );
}
