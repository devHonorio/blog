import { Menu } from "lucide-react";
import * as S from "./styles";
import { NavItens } from "@/types/header";
import { Link } from "@/components/Link/Link";

interface NavigationProps {
  navItens: NavItens[];
}
export const Navigation = ({ navItens }: NavigationProps) => {
  return (
    <S.container>
      <S.togleMenu>
        <Menu />
      </S.togleMenu>

      <S.navContainer>
        {navItens.map(({ href, title }) => (
          <Link key={href} href={href}>
            {title}
          </Link>
        ))}
      </S.navContainer>
    </S.container>
  );
};
