import Link from "next/link";
import tw from "tailwind-styled-components";

export const link = tw(Link)`
px-5
text-pink-600
hover:text-pink-500
rounded
data-[active=true]:bg-gradient-to-br
data-[active=true]:to-blue-600
data-[active=true]:from-pink-600
data-[active=true]:text-white
data-[active=true]:font-semibold
`;
