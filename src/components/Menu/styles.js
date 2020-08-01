import styled from "styled-components";
import Button from "../Button";

export const LogoImage = styled.img`
  max-width: 168px;
  max-height: 94px;

  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;

  position: fixed;
  top: 0;
  left: 0%;
  padding: 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

export const ButtonLink = styled(Button)`
  border: 1px solid var(--white);
  border-radius: 4px;
  color: var(--primary);
  font-size: 16px;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;

    border: 0;
    border-radius: 0;
    background-color: var(--primary);
    color: var(--white);
    outline: 0;
    text-align: center;
  }
`;
