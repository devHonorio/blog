import Link from "next/link";
import tw from "tailwind-styled-components";

export const container = tw.div`
flex
justify-center
gap-10
items-center
my-10
`;

export const Left = tw(Link)`
p-2
bg-gradient-to-tr
to-emerald-300
from-cyan-300
rounded
text-black
`;

export const Right = tw(Link)`
p-2
bg-gradient-to-tl
to-emerald-300
from-cyan-300
rounded
text-black
`;
