import { Box, Heading } from "@kvib/react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const styleNoFlex =
    "hidden bg-green-50 -mx-6 mt-6 absolute shadow flex-col text-center z-10 origin-top animate-rotate-x";
  const styleFlex = styleNoFlex + " group-hover:flex";
  const [dropDownStyle, setdropDownStyle] = useState(styleFlex);

  const switchDropDownStyle = () => {
    setdropDownStyle(styleNoFlex);
    setTimeout(() => {
      setdropDownStyle(styleFlex);
    }, 100);
  };

  return (
    <nav className="flex flex-row justify-center">
      <Link href="">
        <Box className="p-6 cursor-pointer hover:bg-green-100">
          <Heading variant="title3">Om Kompass</Heading>
        </Box>
      </Link>

      <Box className="p-6 group cursor-pointer overflow-hidden hover:bg-green-100">
        <Heading variant="title3">Teamene</Heading>
        <Box className={dropDownStyle} onClick={switchDropDownStyle}>
          <Link className="p-3 hover:bg-green-100" href={"/dask"}>
            DASK
          </Link>
          <Link className="p-3 hover:bg-green-100" href={"/skip"}>
            SKIP
          </Link>
          <Link className="p-3 hover:bg-green-100" href={"/designsystem"}>
            Designsystem
          </Link>
        </Box>
      </Box>
    </nav>
  );
}
