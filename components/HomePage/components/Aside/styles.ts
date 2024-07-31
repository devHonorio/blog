import Link from "next/link";
import tw from "tailwind-styled-components";

export const container = tw.aside`
flex
overflow-x-auto
lg:flex-col
lg:max-w-60
lg:w-full
`;

export const link = tw(Link)`
hover:bg-emerald-300/5
text-start
py-2
px-4
rounded
font-semibold
border-2
border-transparent
data-[active=true]:border-emerald-300
capitalize
`;
