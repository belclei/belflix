import React from "react";
import LogoMain from "../../assets/img/LogoMain.png";
import { LogoImage, MenuWrapper, ButtonLink } from "./styles";

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <a href="/">
        <LogoImage src={LogoMain} alt="Belflix Logo" />
      </a>
      <ButtonLink as="a" href="/">
        Novo Vídeo
      </ButtonLink>
    </MenuWrapper>
  );
}

export default Menu;
