
import { BuildCreditWithVerafi } from "@/components/view/BuildCreditWithVerafi";
import { CheckOutOverApi } from "@/components/view/CheckOutOverApi";
import { CreditScoredashboard } from "@/components/view/CreditScoredashboard";
import { EcosystemForEveryone } from "@/components/view/EcosystemForEveryone";
import { JustUsTo } from "@/components/view/JustUsTo";
import { VerafiHelp } from "@/components/view/VerafiHelp";
import { Hero } from "@/components/view/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
       <Hero/>
       <VerafiHelp/>
       <EcosystemForEveryone/>
       <CreditScoredashboard/>
       <BuildCreditWithVerafi/>
       <CheckOutOverApi/>
   <JustUsTo/>
    </>
  
  );
}
