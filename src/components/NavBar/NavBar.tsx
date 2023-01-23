import React from 'react';
import {SearchBar} from "@/modules/products/components/SearchBar";
import Link from "next/link";
import {useRouter} from "next/router";

export const NavBar = () => {
  const router = useRouter();

  const onSearch = (query: string) => {
    router.push('/products/?search=' + query)
  }

  return (
    <div className="w-full flex justify-center pt-5">
      <Link href="/products">
        <h1 className="text-4xl font-bold absolute left-5">LOGO</h1>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};