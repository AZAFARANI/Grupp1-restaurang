import { Outlet } from "react-router-dom";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../scss/Layout.scss";
import { Link } from "react-router-dom";
import { Icon } from "./Styled/Icon";
import { Div } from "./Styled/Div";
import { Span } from "./Styled/Span";
import { Image } from "./Styled/Image";

export const Layout = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <>
      <Icon
        className={`${isClicked ? "hidden" : "visible"} open-menu`}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        icon={faBars}
      />

      <div className="nav-wrapper">
        <div className={`${isClicked ? "slide-in" : "slide-out"} menu`}>
          <div className="heading">
            <Span
              id="menuHeading"
              fontSize="30pt"
              color="white"
              fontType="Montez"
            >
              Meny
            </Span>

            <Icon
              icon={faXmark}
              onClick={() => {
                setIsClicked(false);
              }}
            />
          </div>

          <div className="menuDiv">
            <ul>
              <Link
                onClick={() => {
                  setIsClicked(false);
                }}
                to={"/"}
              >
                <li>
                  <Span color="white" fontSize="30px">
                    Startsida
                  </Span>
                </li>
              </Link>
              <li>
                <Link
                  onClick={() => {
                    setIsClicked(false);
                  }}
                  to={"/booking"}
                >
                  <Span color="white" fontSize="30px">
                    Boka bord
                  </Span>
                </Link>
              </li>

              <Link
                onClick={() => {
                  setIsClicked(false);
                }}
                to={"/contact"}
              >
                <li>
                  <Span color="white" fontSize="30px">
                    Kontaktsida
                  </Span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      <Div width="100%" backgroundColor="#CFC99B" flexDirectionLaptop="row">
        <Div width="100%" backgroundColor="#CFC99B">
          <Div
            flexDirectionLaptop="row"
            gapTablet="5px"
            gap="100px"
            padding="30px 0px"
            paddingLaptop="15px!important"
          >
            <Div
              flexDirection="row"
              gap="10px"
              width="33%"
              justifyContent="center"
            >
              <Image
                padding="0px 0px 10px 0px"
                width="30%"
                src="/svg/fluent_contact-card-48-regular.svg"
              ></Image>
              <Link to={"/contact"}>
                <Span fontSizeLaptop="1.5rem" fontSize="1.8rem" color="white">
                  kontakt
                </Span>
              </Link>
            </Div>

            <Div
              display="none"
              flexDirection="row"
              gap="10px"
              width="33%"
              justifyContent="center"
              displayLaptop="flex"
            >
              <Image width="15%" src="/svg/Vector-2.svg"></Image>
              <Link to={"/"}>
                <Span fontSizeLaptop="1.5rem" fontSize="1.8rem" color="white">
                  Hem
                </Span>
              </Link>
            </Div>

            <Div
              display="none"
              flexDirection="row"
              gap="15px"
              width="33%"
              justifyContent="center"
              displayLaptop="flex"
            >
              <Image width="13%" src="/svg/Vector.svg"></Image>
              <Link to={"/booking"}>
                <Span fontSizeLaptop="1.5rem" fontSize="1.8rem" color="white">
                  Boka bord
                </Span>
              </Link>
            </Div>

            <Image
              displayLaptop="none"
              src="/svg/bi_arrow-down-circle-fill.svg"
              width="15%"
            ></Image>
          </Div>
        </Div>
        <Div width="100%" backgroundColor="#00000043">
          <Div
            padding="10px"
            flexDirection="row"
            gap="10px"
            justifyContent="center"
          >
            <Image src="/svg/ph_copyright-light.svg" width="5%"></Image>
            <Span
              fontSizeLaptop="1.5rem"
              font-family="Sofia"
              fontSize="1.6rem"
              color="white"
            >
              Tramonto
            </Span>
          </Div>
        </Div>
      </Div>
    </>
  );
};
