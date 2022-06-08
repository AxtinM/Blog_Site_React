import { useEffect, useState } from "react";
import styled from "styled-components";
import { HeadTitle } from "../../components/Title";
import NavBar from "../../components/NavBar";
import Menu from "../../components/RightMenu/Menu";
import { useSpring } from "react-spring";

import Footer from "../../components/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Outlet } from "react-router-dom";
import AuthModalMenu from "../../components/ModalComponents/AuthModalMenu";
import {
  ModalWrapper,
  ErrorMsg,
} from "../../components/ModalComponents/ModalComponents";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthState,
  selectUser,
  selectError,
  handleError,
} from "../../features/useSlices";

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
  // redux
  const isLoggedIn = useSelector(selectAuthState);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoggedIn]);

  // react-spring
  const [loginBtn, setLoginBtn] = useState(false);
  const [registerBtn, setRegisterBtn] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (error !== null) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
        setTimeout(() => {
          dispatch(handleError(null));
        }, 1000);
      }, 3000);
    }
  }, [error]);

  const AuthModalSpring = useSpring({
    opacity: loginBtn || registerBtn ? "1" : "0",
    transform: loginBtn || registerBtn ? "scale(1)" : "scale(0)",
  });

  const errorModalSpring = useSpring({
    opacity: isError === false ? "0" : "1",
    top: isError === false ? "-5em" : "0",
  });

  return (
    <>
      {!isLoggedIn ? (
        <ModalWrapper
          style={
            loginBtn || registerBtn ? { display: "flex" } : { display: "none" }
          }
          className="name"
        >
          <ErrorMsg
            className="ERROR"
            error={error !== null ? error : ""}
            style={errorModalSpring}
          />

          <AuthModalMenu
            springStyle1={AuthModalSpring}
            setRegisterBtn={setRegisterBtn}
            registerBtn={registerBtn}
            setLoginBtn={setLoginBtn}
            loginBtn={loginBtn}
          />
        </ModalWrapper>
      ) : (
        <></>
      )}
      <BlogContainer>
        <HeadContainer>
          {!isLoggedIn ? (
            <Menu
              setRegisterBtn={setRegisterBtn}
              registerBtn={registerBtn}
              setLoginBtn={setLoginBtn}
              loginBtn={loginBtn}
            />
          ) : (
            <></>
          )}
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
