import React from "react";
import styled from "styled-components";
import "./index.css";
import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function App() {
  return (
    <AppWrapper>
      <Menu />
    </AppWrapper>
  );
}

export default App;
