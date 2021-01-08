import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import {
  MainContainer,
  MainContent,
  MainItems,
  MainH1,
  MainP,
  MainBtn,
} from "./MainElements";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MainContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContent>
        <MainItems>
          <MainH1>The Best Steak Ever</MainH1>
          <MainP>Ready in 30 minutes</MainP>
          <MainBtn>Order Now</MainBtn>
        </MainItems>
      </MainContent>
    </MainContainer>
  );
};

export default Main;
