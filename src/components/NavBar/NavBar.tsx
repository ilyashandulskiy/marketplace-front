import React from 'react';
import {SearchBar} from "@/modules/products/components/SearchBar";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="w-full flex justify-center pt-5">
      <Link href="/products">
        <h1 className="text-4xl font-bold absolute left-5">LOGO</h1>
      </Link>
      <SearchBar />
    </div>
  );
};