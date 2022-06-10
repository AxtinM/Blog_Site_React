import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import { logout } from "../../../features/useSlices";
import { authClient } from "../../../client";

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

  const user = useSelector(selectUser);
  const [imageUrl, setImageUrl] = useState(ProfileImg);

  useEffect(() => {
    setProfileMenu(false);
    // console.log(user);
  }, [width]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (imageUrl) {
      setImageUrl(imageUrl);
    }
  }, [imageUrl]);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    const res = await authClient.post(
      "/logout",
      {},
      {
        headers: { Authorization: `Bearer ${user.user.token}` },
      }
    );
    const data = await res.data;
    if (data.success) {
      dispatch(logout());
    }
  };

  return (
    <>
      <ProfileMenuWrapper style={ProfileMenuSpring}>
        <InsideMenuWrapper>
          <Name>{user.user.username}</Name>
          <Element text={user.user.email} label="Email" />
          <Element text={user.user.name} label="Name" />
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
            onChange={(e) => {
              const file = e.target.files[0];
              setImageUrl(URL.createObjectURL(file));
            }}
          />

          <ButtonChangeImg
            style={{ bottom: "4em" }}
            onClick={() => {
              inputRef.current.click();
            }}
          >
            Upload
          </ButtonChangeImg>
          <ButtonChangeImg
            onClick={() => {
              handleLogout();
            }}
          >
            LogOut
          </ButtonChangeImg>
        </InsideMenuWrapper>
      </ProfileMenuWrapper>
      <ProfileCircle
        onClick={() => {
          setProfileMenu(!profileMenu);
        }}
      >
        <ProfileImage src={imageUrl} />
      </ProfileCircle>
    </>
  );
}

export default Profile;
