import { Box, Button, Flex, Text } from "@kvib/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-center">
      <Box className="p-6 cursor-pointer hover:bg-green-100">
        <Link href={""}>Om Kompass</Link>
      </Box>

      <Box className="p-6 group cursor-pointer overflow-hidden hover:bg-green-100">
        Teamene
        <Box className="hidden bg-green-50 absolute shadow flex-col text-center z-10 max-w-sm animate-scale-from-nothing group-hover:flex">
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
