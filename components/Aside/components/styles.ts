import Link from "next/link";
import tw from "tailwind-styled-components";

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
