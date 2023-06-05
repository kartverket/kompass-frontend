"use client";

import { Center, Heading } from "@kvib/react";

export default function Home() {
  return (
    <main className="p-6">
      {/* <TextLink>Test Link</TextLink>
      <Button>Test Button</Button>
      <Heading>Velkommen til Kompass!</Heading> */}
      <Heading className="p-4" variant="title1">
        Velkommen til Kompass!
      </Heading>
      <Center className="mx-4" backgroundColor={"green.50"} padding={6}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        consequuntur magnam? Deserunt nesciunt recusandae voluptatum quae illum
        ea non quia pariatur quos distinctio minima, quam laudantium itaque
        necessitatibus impedit tempore.
      </Center>
    </main>
  );
}
