import * as S from "./styles";
import { Link } from "../Link/Link";
import { MainNav } from "@/types/header";
import { Logo } from "../Logo";
import { Menu } from "lucide-react";
import { Navigation } from "./components/Navigation";

interface HeaderProps extends MainNav {}
export const Header = ({ navItens }: HeaderProps) => {
  return (
    <S.header>
      <Logo />

      <Navigation navItens={navItens} />
    </S.header>
  );
};
