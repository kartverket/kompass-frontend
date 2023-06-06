"use client";

import LogoText from "@/components/LogoText";
import { Center, Heading, Text } from "@kvib/react";
import DASKLogo from "../../../public/logo_dask.png";

export default function Home() {
  const DASKDescription = `
    Fant ikke no kul tekst hos DASK, så da bare skriver jeg litt slutter og vås her sånn at det ender opp med å være litt tekst på siden.
    
    DASK meg her og DASK meg der DASK meg her og DASK meg der DASK meg her og DASK meg der DASK meg her og DASK meg der DASK meg her og DASK meg der
    DASK meg her og DASK meg der DASK meg her og DASK meg der DASK meg her og DASK meg der DASK meg her og DASK meg der DASK meg her og DASK meg der 
  `;

  return (
    <main>
      <Center className="pb-4" flexDirection={"column"}>
        <Heading>DASK</Heading>
        <Text>DAtaplattform Statens Kartverk</Text>
      </Center>
      <LogoText
        logoAlt="DASK Logo"
        logoSrc={DASKLogo.src}
        text={DASKDescription}
        reverse={true}
      />
    </main>
  );
}
