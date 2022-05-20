import React, { useState } from "react";
import styled from "styled-components";
import { HeadTitle } from "../../components/Title";
import NavBar from "../../components/NavBar";
import Menu from "../../components/RightMenu/Menu";
import { animated, useSpring } from "react-spring";

import Footer from "../../components/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Outlet } from "react-router-dom";
import AuthModalMenu from "../../components/ModalComponents/AuthModalMenu";
import { ModalWrapper } from "../../components/ModalComponents/ModalComponents";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background: #1a1a1a;
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
`;

function MainBlog() {
  const [loginBtn, setLoginBtn] = useState(false);
  const [registerBtn, setRegisterBtn] = useState(false);

  const AuthModalSpring = useSpring({
    opacity: loginBtn ? "1" : "0",
    transform: loginBtn ? "scale(1)" : "scale(0)",
  });

  return (
    <>
      <ModalWrapper
        style={
          loginBtn || registerBtn ? { display: "flex" } : { display: "none" }
        }
        className="name"
      >
        <AuthModalMenu
          springStyle1={AuthModalSpring}
          setRegisterBtn={setRegisterBtn}
          registerBtn={registerBtn}
          setLoginBtn={setLoginBtn}
          loginBtn={loginBtn}
        />
      </ModalWrapper>
      <BlogContainer>
        <HeadContainer>
          <Menu
            setRegisterBtn={setRegisterBtn}
            registerBtn={registerBtn}
            setLoginBtn={setLoginBtn}
            loginBtn={loginBtn}
          />
          <HeadTitle headStyles={{ marginTop: 20 }} />
          <NavBar />
        </HeadContainer>
        <Outlet />
        <Footer />
      </BlogContainer>
    </>
  );
}

export default MainBlog;
