"use client";
import kompassLogo from "../../public/logo_kompass.svg";
import { Heading } from "@kvib/react";
import LogoText from "@/components/LogoText";

export default function Home() {
  const vision =
    "Vår visjon er å skape et helhetlig økosystem for moderne utvikling. Kort sagt betyr det at vi skal gjøre livet enklere for deg som utvikler digitale løsninger i Kartverket, og vi har ansvar for fellesfunksjoner som blant annet infrastrukturplattform, designsystem og dataplattform.";

  return (
    <main className="p-6">
      {/* <TextLink>Test Link</TextLink>
      <Button>Test Button</Button>
      <Heading>Velkommen til Kompass!</Heading> */}
      <Heading className="px-4" variant="title1">
        Velkommen til Kompass!
      </Heading>
      <LogoText logoAlt="Logo Kompass" logoSrc={kompassLogo} text={vision} />
    </main>
  );
}
