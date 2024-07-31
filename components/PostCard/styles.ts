"use client";
import Image from "next/image";
import tw from "tailwind-styled-components";

export const container = tw.div`
flex
flex-col
h-full
gap-5
border
border-neutral-300
dark:border-neutral-700
rounded
p-7
hover:border-emerald-300
`;

export const imageContainer = tw.div`
relative
h-40
max-w-40
`;

export const image = tw(Image)`
rounded-xl
object-cover
object-center
`;

export const time = tw.time`
opacity-50
`;

export const title = tw.h2`
text-2xl
font-semibold
`;

export const description = tw.p`
opacity-65
`;

export const tagContainer = tw.div`
mt-auto
`;
