import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import "pattern.css/dist/pattern.min.css";
import { Button } from "@/components/ui/button";
import { NotFound } from "@/components/icons";

const NotFoundPage = () => {
  return (
    <main className="p-2 pattern-dots-lg bg-slate-100 text-black text-opacity-10 h-full">
      <div className="h-full flex flex-col items-center justify-center ">
        <div className="flex items-center">
          <p className="text-3xl font-bold text-gray-600">
            Sorry, Page not Found!
          </p>
          <NotFound className="fill-gray-700 ml-4" width={30} />
        </div>
        <Button asChild className="mt-4">
          <Link href={"/"} className="flex items-center">
            <AiFillHome className="text-lg -translate-y-[1.5px]" />
            <span className="ml-2 font-bold leading-none">Go Home</span>
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFoundPage;
