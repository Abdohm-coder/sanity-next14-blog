import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../UI/Container";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export const Header = () => {
  return (
    <header>
      <Container className="flex items-center justify-between gap-2 font-medium py-10">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src={
                "https://lh3.googleusercontent.com/a/ACg8ocJ1E9K7sWRFhPhMKODeze3bOGg1CNFN73Yb-LcK_n7mqvk=s96-c"
              }
              alt="logo"
              width={42}
              height={42}
              className="rounded-full"
            />
          </Link>
          <h1>Abdo Hadj Med</h1>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-normal hover:"
            >
              Contact <ArrowTopRightOnSquareIcon className="w-5 h-5" />{" "}
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};
