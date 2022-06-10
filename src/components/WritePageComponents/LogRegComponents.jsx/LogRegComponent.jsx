import React, { useState } from "react";
import {
  HeaderText,
  SwitchButtonWrapper,
  SwitchButton,
  InsideFormWrapper,
  LabelText,
  InputBox,
  LogRegBox,
  SubmitButton,
} from "./Components";
import { authClient } from "../../../client";
import { useSpring } from "react-spring";
import { useDispatch } from "react-redux";
import { selectError, handleError, login } from "../../../features/useSlices";

import "../../../styles/write.css";

const handleLogin = async (email, password) => {
  const res = await authClient.post("/login", { email, password });
  const data = await res.data;
  return data;
};

const handleRegister = async (email, password, username, name) => {
  const res = await authClient.post("/register", {
    email: email,
    password: password,
    username: username,
    name: name,
  });
  const data = await res.data;
  return data;
};

const InsideLogin = ({ style }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  return (
    <InsideFormWrapper style={style}>
      <HeaderText className="form-header">Login</HeaderText>
      <div className="form-elem">
        <LabelText>Email</LabelText>
        <InputBox
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-elem">
        <LabelText>Password</LabelText>
        <InputBox
          type="password"
          placeholder="***********"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <SubmitButton
        type="submit"
        onClick={async () => {
          try {
            const res = await handleLogin(email, password);
            dispatch(login({ user: res.user, isLoggedIn: true }));
          } catch (err) {
            dispatch(handleError(err.response.data.message));
            console.log(`------${err.response.status}------`);
          }
        }}
      >
        Login
      </SubmitButton>
    </InsideFormWrapper>
  );
};

const InsideRegister = ({ style }) => {
  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  return (
    <InsideFormWrapper style={style}>
      <HeaderText className="form-header">SignIn</HeaderText>
      <div className="form-elem">
        <LabelText>Name</LabelText>
        <InputBox
          type="text"
          placeholder="John Adams"
          name="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-elem">
        <LabelText>Alias</LabelText>
        <InputBox
          type="username"
          placeholder="Snoop Doggy Dog"
          name="username"
          required
          value={alias}
          onChange={(e) => {
            setAlias(e.target.value);
          }}
        />
      </div>
      <div className="form-elem">
        <LabelText>Email</LabelText>
        <InputBox
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-elem">
        <LabelText>Password</LabelText>
        <InputBox
          type="password"
          placeholder="***********"
          name="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <SubmitButton
        type="submit"
        onClick={() => {
          handleRegister(email, password, alias, name);
        }}
      >
        SignIn
      </SubmitButton>
    </InsideFormWrapper>
  );
};

function LogRegComponent() {
  const [loginBtn, setLoginBtn] = useState(true);
  const LoginSpring = useSpring({
    opacity: loginBtn ? 1 : 0,
    transform: loginBtn ? "translateX(0)" : "translateX(-500%)",
    display: loginBtn ? "flex" : "none",
  });

  const RegisterSpring = useSpring({
    opacity: loginBtn ? 0 : 1,
    transform: loginBtn ? "translateX(500%)" : "translateX(0)",
    display: loginBtn ? "none" : "flex",
  });
  LoginSpring.onChange = (spring) => {
    console.log(spring);
  };
  RegisterSpring.onChange = (spring) => {
    console.log(spring);
  };

  return (
    <div id="write-login">
      <HeaderText>Please concider Logging in First !</HeaderText>
      <SwitchButtonWrapper>
        <SwitchButton
          type="button"
          value="Login"
          style={{
            backgroundColor: "#50FF81",
            filter: loginBtn ? "none" : "grayscale(100%)",
            boxShadow: !loginBtn ? "none" : "inset 0px 0px 4px #000",
          }}
          onClick={() => {
            setLoginBtn(true);
          }}
        >
          LogIn
        </SwitchButton>
        <SwitchButton
          type="button"
          value="Register"
          style={{
            backgroundColor: "#50FF81",
            filter: !loginBtn ? "none" : "grayscale(100%)",
            boxShadow: loginBtn ? "none" : "inset 0px 0px 4px #000",
          }}
          onClick={() => {
            setLoginBtn(false);
          }}
        >
          SignIn
        </SwitchButton>
      </SwitchButtonWrapper>
      <LogRegBox>
        <InsideLogin style={LoginSpring} />
        <InsideRegister style={RegisterSpring} />
      </LogRegBox>
    </div>
  );
}

export default LogRegComponent;
