import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="absolute top-0 left-0 w-full px-8">
      <div className="flex items-end justify-between w-full px-2 h-16 pt-2 pb-2 border-b-2 border-[rgba(250,250,250,0.25)] navbar text-zt-light font-urbanist max-w-[1280px] mx-auto">
        <Link to="/" className="text-3xl font-semibold">
          ZotTier
        </Link>
        <button className="text-lg">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
