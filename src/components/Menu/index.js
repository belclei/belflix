import React from "react";
import LogoMain from "../../assets/img/LogoMain.png";
import "./Menu.css";
import ButtonLink from "./components/ButtonLink";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={LogoMain} alt="Belflix Logo" className="Logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
