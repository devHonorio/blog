"use client";

import tw from "tailwind-styled-components";
import Image from "next/image";

export const container = tw.div`
flex
items-center
gap-5
font-bold
`;
export const image = tw(Image)`
w-12
rounded-full
`;
