import { NotFound } from "@/components/Icons";
import React from "react";

const NotFoundPage = () => {
  return (
    <main className="p-4 flex items-center justify-center h-full">
      <p className="text-3xl font-bold text-gray-600">Sorry, Page not Found!</p>
      <NotFound className="fill-gray-700 ml-4" width={40} />
    </main>
  );
};

export default NotFoundPage;
