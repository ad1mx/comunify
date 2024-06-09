import React from "react";
import Logo from "../Shared/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container flex justify-between items-center">
      <div className="flex items-center">
        <Logo />
        <p className="font-extrabold text-2xl text-gray-800 ml-2">Comunify</p>
      </div>
      <div>
        <Link href={"/"}>About</Link>
      </div>
    </header>
  );
};

export default Header;
