import { Box, Center, Flex } from "@kvib/react";
import Image from "next/image";

interface LogoTextProps {
  logoSrc: string;
  logoAlt: string;
  text: string;
  reverse?: boolean;
}

function LogoText({ reverse = false, logoAlt, logoSrc, text }: LogoTextProps) {
  const logoBox = (
    <Box key="logoBox">
      <Center className="p-12">
        <Image width="128" height="128" priority src={logoSrc} alt={logoAlt} />
      </Center>
    </Box>
  );
  const textBox = (
    <Box
      key="textBox"
      className="p-6 max-w-lg text-justify"
      backgroundColor={"green.50"}
    >
      {text}
    </Box>
  );
  let contents = [logoBox, textBox];
  if (reverse) contents = contents.reverse();
  return (
    <Flex className="px-6 flex-col justify-between items-center md:flex-row lg:justify-evenly">
      {contents}
    </Flex>
  );
}

export default LogoText;
