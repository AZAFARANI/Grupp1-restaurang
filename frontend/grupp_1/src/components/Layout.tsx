import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import { CustomSpan } from "./Styled/CustomSpan";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { MenuIcon } from "./Styled/MenuIcon";
import { useState } from "react";
import "../scss/Layout.scss";
import { Link } from "react-router-dom";
import { CustomDiv, CustomDivFooter } from "./Styled/CustomDiv";

export const Layout = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <>
      <MenuIcon
        className={`${isClicked ? "hidden" : "visible"} open-menu`}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        icon={faBars}
      />

      <div className="nav-wrapper">
        <div className={`${isClicked ? "slide-in" : "slide-out"} menu`}>
          <div className="heading">
            <CustomSpan
              id="menuHeading"
              fontSize="30pt"
              color="white"
              fontType="Montez"
            >
              Meny
            </CustomSpan>

            <MenuIcon
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
                  <CustomSpan color="white" fontSize="30px">
                    Startsida
                  </CustomSpan>
                </li>
              </Link>
              <li>
                <Link
                  onClick={() => {
                    setIsClicked(false);
                  }}
                  to={"/booking"}
                >
                  <CustomSpan color="white" fontSize="30px">
                    Boka bord
                  </CustomSpan>
                </Link>
              </li>

              <Link
                onClick={() => {
                  setIsClicked(false);
                }}
                to={"/contact"}
              >
                <li>
                  <CustomSpan color="white" fontSize="30px">
                    Kontaktsida
                  </CustomSpan>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <Outlet />

      <CustomDivFooter
        className="contactContainer"
        gap="0"
        justifyContent="unset"
        height="50vh"
        backgroundImage="2"
        backgroundColor="black"
        padding="0px 0px"
      >
        <CustomDivFooter
          className="contactFirstSection"
          flexDirection="column"
          justifyContent="unset"
          height="40vh"
          backgroundImage="2"
          gap="70px"
          alignItems="center"
        >
          <div className="footerKontakt">
            <Link to={"/"}>
              <div className="contactItem notVisible contactIcon">
                <img className="contactIcon2" src="/svg/Vector-2.svg"></img>
                <CustomSpan color="white" fontSize="1.3rem">
                  Hem
                </CustomSpan>
              </div>
            </Link>

            <Link to={"/contact"}>
              <div className="contactItem">
                <img
                  className="contactIcon"
                  src="/svg/fluent_contact-card-48-regular.svg"
                ></img>
                <CustomSpan color="white" fontSize="1.3rem">
                  Kontakt
                </CustomSpan>
              </div>
            </Link>

            <Link to={"/booking"}>
              <div className="contactItem notVisible">
                <img src="/svg/Vector.svg"></img>
                <CustomSpan color="white" fontSize="1.3rem">
                  Boka bord
                </CustomSpan>
              </div>
            </Link>
          </div>

          <img
            className="arrowUp"
            src="/svg/bi_arrow-down-circle-fill.svg"
          ></img>
        </CustomDivFooter>
        <CustomDivFooter
          className="contactContainer"
          flexDirection="row"
          justifyContent="center"
          backgroundColor="#cfc99bb8"
          height="10vh"
          backgroundImage="2"
          alignItems="center"
        >
          <div>
            <img src="/svg/ph_copyright-light.svg"></img>
            <img className="contactIcon" src="/svg/Tramonto.svg"></img>
          </div>
        </CustomDivFooter>
      </CustomDivFooter>
    </>
  );
};
