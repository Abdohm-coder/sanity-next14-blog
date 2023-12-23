import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../UI/Container";

export const Header = () => {
  return (
    <header>
      <Container className="flex items-center justify-between gap-2 font-bold px-10 py-5">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src={
                "https://lh3.googleusercontent.com/a/ACg8ocJ1E9K7sWRFhPhMKODeze3bOGg1CNFN73Yb-LcK_n7mqvk=s96-c"
              }
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <h1>Abdo Hadj Med</h1>
        </div>
        <div></div>
      </Container>
    </header>
  );
};
