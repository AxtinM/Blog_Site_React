import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  ProfileCircle,
  ProfileImage,
  ProfileMenuWrapper,
  Name,
  InsideMenuWrapper,
  Element,
  ButtonChangeImg,
  ImageInput,
} from "./ProfileComponents";
import ProfileImg from "../../../static/images/ProfilePic.png";
import { useSpring } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../features/useSlices";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

function Profile() {
  const [profileMenu, setProfileMenu] = useState(false);
  const [elementHovered, setElementHovered] = useState(false);
  const [width, height] = useWindowSize();

  const ProfileMenuSpring = useSpring({
    transform: profileMenu ? "translateY(5.5em)" : "translateY(-5em)",
    opacity: profileMenu ? "1" : "0",
    height: profileMenu ? "18em" : "0",
  });

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    setProfileMenu(false);
    // console.log(user);
  }, [width]);

  console.log(user.user);

  return (
    <>
      <ProfileMenuWrapper style={ProfileMenuSpring}>
        <InsideMenuWrapper>
          <Name>{user.user.username}</Name>
          <Element text={user.user.email} label="Email" />
          <Element text={user.user.name} label="Name" />
          <ImageInput label="choose image" />
        </InsideMenuWrapper>
      </ProfileMenuWrapper>
      <ProfileCircle
        onClick={() => {
          setProfileMenu(!profileMenu);
        }}
      >
        <ProfileImage src={ProfileImg} />
      </ProfileCircle>
    </>
  );
}

export default Profile;
