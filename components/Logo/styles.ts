"use client";

import tw from "tailwind-styled-components";
import Image from "next/image";

export const container = tw.div`
flex
items-center
gap-5
`;
export const image = tw(Image)`
w-16
rounded-full
`;
