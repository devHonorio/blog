import tw from "tailwind-styled-components";

export const container = tw.div`
flex
flex-col
gap-2
group
absolute
right-0
top-5
sm:flex-row
sm:sticky
`;

export const togleMenu = tw.button`
p-2
bg-gradient-to-tr
to-emerald-300
from-cyan-300
rounded
text-black
self-end
sm:hidden
`;

export const navContainer = tw.nav`
hidden
flex-col
justify-center
bg-neutral-800
border
border-emerald-300
p-5
z-10
rounded
group-hover:flex
sm:flex
sm:flex-row
sm:p-0
sm:border-none
`;
