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
max-w-5xl
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
