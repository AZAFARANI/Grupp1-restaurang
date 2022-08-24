import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import { CustomSpan } from "./Styled/CustomSpan";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { MenuIcon } from "./Styled/MenuIcon";
import { useState } from "react";
import "../scss/Layout.scss";
import { Link } from "react-router-dom";

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
    </>
  );
};
