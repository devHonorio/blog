import Image from "next/image";
import tw from "tailwind-styled-components";

export const back = tw.button`
flex
items-center
gap-1
p-2
font-bold
my-10
hover:bg-gradient-to-tl
hover:to-emerald-300
hover:from-cyan-300
hover:rounded
hover:text-black
`;

export const content = tw.div`
max-w-4xl
mx-auto
`;

export const imageContainer = tw.div`
relative
w-full
h-96
sm:h-[500px]
`;

export const image = tw(Image)`
rounded-xl
object-cover
object-center
`;

export const date = tw.p`
mt-10
text-sm
text-neutral-200/70
`;

export const title = tw.h1`
text-6xl
font-bold
my-5
`;

export const description = tw(date)`
mt-0
text-xl
mb-10
`;
