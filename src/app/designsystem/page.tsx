"use client";

import LogoText from "@/components/LogoText";
import KVIBLogo from "../../../public/logo_kvib.svg";
import { Center, Heading } from "@kvib/react";

export default function Home() {
  const designSystemDescription = `
    Team designsystem skal hjelpe produktteamene i Kartverket med å skape helhetlige produkter med fokus på brukervennlighet og universell utforming. 

    Vi jobber for tiden med å utforme komponentbiblioteket KVIB og håndboken i interaksjonsdesign.`;
  return (
    <main>
      <Center className="pb-4" flexDirection={"column"}>
        <Heading>Designsystem</Heading>
      </Center>
      <LogoText
        logoAlt="KVIB Logo"
        logoSrc={KVIBLogo.src}
        text={designSystemDescription}
        reverse={true}
      />
    </main>
  );
}
