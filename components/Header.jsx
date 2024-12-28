import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-grey shadow-md top-0 py-8 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-[26px]">Logo</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
