import * as S from "./styles";
import { Link } from "../Link/Link";
import { MainNav } from "@/types/header";
import { Logo } from "../Logo";

interface HeaderProps extends MainNav {}
export const Header = ({ navItens }: HeaderProps) => {
  return (
    <S.header>
      <Logo />

      <nav>
        {navItens.map(({ href, title }) => (
          <Link key={href} href={href}>
            {title}
          </Link>
        ))}
      </nav>
    </S.header>
  );
};
