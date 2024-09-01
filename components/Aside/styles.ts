import tw from "tailwind-styled-components";
import { link as tagLink } from "./components/styles";
export const container = tw.aside`
flex
overflow-x-auto
lg:flex-col
lg:max-w-60
lg:w-full
`;

export const link = tw(tagLink)``;
