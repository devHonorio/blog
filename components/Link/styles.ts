import Link from "next/link";
import tw from "tailwind-styled-components";

export const link = tw(Link)`
px-5
py-2
text-gray-200
hover:text-white
rounded
data-[active=true]:bg-gradient-to-br
data-[active=true]:to-emerald-300
data-[active=true]:from-cyan-300
data-[active=true]:text-black
data-[active=true]:font-semibold
`;
