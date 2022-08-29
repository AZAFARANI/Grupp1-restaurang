import { Outlet } from "react-router-dom";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../scss/Layout.scss";
import { Link } from "react-router-dom";
import { Icon } from "./Styled/Icon";
import { Div } from "./Styled/Div";
import { Span } from "./Styled/Span";

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

            <Div
                className="contactContainer"
                gap="0"
                justifyContent="unset"
                height="50vh"
                backgroundImage="2"
                backgroundColor="black"
                padding="0px 0px"
            >
                <Div
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
                                <img
                                    className="contactIcon2"
                                    src="/svg/Vector-2.svg"
                                ></img>
                                <Span color="white" fontSize="1.3rem">
                                    Hem
                                </Span>
                            </div>
                        </Link>

                        <Link to={"/contact"}>
                            <div className="contactItem">
                                <img
                                    className="contactIcon"
                                    src="/svg/fluent_contact-card-48-regular.svg"
                                ></img>
                                <Span color="white" fontSize="1.3rem">
                                    Kontakt
                                </Span>
                            </div>
                        </Link>

                        <Link to={"/booking"}>
                            <div className="contactItem notVisible">
                                <img src="/svg/Vector.svg"></img>
                                <Span color="white" fontSize="1.3rem">
                                    Boka bord
                                </Span>
                            </div>
                        </Link>
                    </div>

                    <img
                        className="arrowUp"
                        src="/svg/bi_arrow-down-circle-fill.svg"
                    ></img>
                </Div>
                <Div
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
                        <img
                            className="contactIcon"
                            src="/svg/Tramonto.svg"
                        ></img>
                    </div>
                </Div>
            </Div>
        </>
    );
};
