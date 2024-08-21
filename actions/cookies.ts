"use server";

import { cookies } from "next/headers";

export const setCookie = (name: string, value: string) => {
  if (!name || !value) throw new Error("`name` and `value` must be filled!");

  const cookiesStore = cookies();

  cookiesStore.set(name, value);

  return true;
};

export const getCookie = (name: string) => {
  if (!name) throw new Error("No `name` specified!");

  const cookiesStore = cookies();

  const cookie = cookiesStore.get(name);

  return cookie?.value;
};
