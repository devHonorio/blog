import tw from "tailwind-styled-components";
import { GitHub, Instagram, WhatsApp } from "../icons";

export const container = tw.footer`
mt-20
border-t
border-neutral-200/20
flex
flex-col
items-center
py-10
gap-5
`;

export const creator = tw.div`

`;

export const social = tw.div`
flex
gap-5
`;

export const copyright = tw.div`
`;

export const socialItem = tw.a`
p-2
rounded
bg-gradient-to-br
to-emerald-300
from-cyan-300
text-black
`;

export const github = tw(GitHub)``;
export const instagram = tw(Instagram)``;
export const whatsapp = tw(WhatsApp)``;
