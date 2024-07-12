"use client";
import { usePathname } from "next/navigation";
import * as S from "./styles";

type LinkProps = {
  children: React.ReactNode;
  href: string;
};
export const Link = ({ children, href }: LinkProps) => {
  const path = usePathname();
  return (
    <S.link href={href} data-active={href === path}>
      {children}
    </S.link>
  );
};
