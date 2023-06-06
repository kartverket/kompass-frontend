"use client";

import LogoText from "@/components/LogoText";
import SKIPLogo from "../../../public/logo_skip.png";
import { Text, Center, Heading } from "@kvib/react";

export default function Home() {
  const SKIPDescription = `
    SKIP-teamet jobber med en utviklingsplattform hvor kjernekomponentene er Kubernetes og Github Enterprise.

    Hensikten er å ha en plattform hvor utviklere enkelt skal kunne lage, teste og kjøre containerbaserte applikasjoner basert på Cloud Native-prinsipper på en enkel og sikker måte og ved hjelp av CI/CD pipelines.

    SKIP-teamet er sammensatt av interne utviklere og driftere, og supplert med kapasitet og ekstra kompetanse fra konsulenter som er tilknyttet Bekk.`;
  return (
    <main>
      <Center className="pb-4" flexDirection={"column"}>
        <Heading>SKIP</Heading>
        <Text>Statens Kartverks InfrastrukturPlattform</Text>
      </Center>
      <LogoText
        logoAlt="SKIP Logo"
        logoSrc={SKIPLogo.src}
        text={SKIPDescription}
        reverse={true}
      />
    </main>
  );
}
