import { Outlet } from "react-router-dom";
import { useState } from "react";
// ### ICONS ###
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// ### STYLED COMPONENTS ###
import { Link } from "./Styled/Link";
import { Icon } from "./Styled/Icon";
import { Div } from "./Styled/Div";
import { Span } from "./Styled/Span";
import { Image } from "./Styled/Image";
// ### MODAL ###
import { Modal } from "./Modal";

export const Layout = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    function scrollTop() {
        document.querySelector("#scrollToMain")?.scrollIntoView(true);
    }

    return (
        <Div overflowX="hidden">
            {/* MENU ICON */}
            <Icon
                cursor="pointer"
                displayLaptop="none"
                transition="transform 0.2s ease"
                className={`${isClicked ? "hidden" : "visible"} `}
                postion="absolute"
                right="5%"
                top="5vh"
                onClick={() => {
                    setIsClicked(!isClicked);
                }}
                icon={faBars}
                shadow="0px 0px 3px hsla(0, 0%, 0%, 0.5)"
                id="navigation-menu"
            />

            {/* MOBILE / TABLET MENU */}
            <Div
                position="fixed"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                zIndex="1"
                pointerEvents="none"
            >
                <Div
                    alignItems="flex-start"
                    gap="5%"
                    padding="20px"
                    zIndex="5"
                    pointerEvents="all"
                    position="absolute"
                    top="0"
                    left="-110%"
                    opacity="0"
                    height="100%"
                    width="100%"
                    backgroundColor=" #000000cc"
                    transition="left 0.5s ease, opacity 0.5s ease"
                    display="flex"
                    flexDirection="column"
                    className={`${isClicked ? "show-menu" : "hide-menu"}`}
                >
                    <Div
                        width="100%"
                        flexDirection="row"
                        justifyContent="space-between"
                        height="50px"
                    >
                        <Span
                            id="menuHeading"
                            fontSize="30pt"
                            color="white"
                            fontType="Montez"
                        >
                            Meny
                        </Span>

                        <Icon
                            right="20px"
                            cursor="pointer"
                            icon={faXmark}
                            onClick={() => {
                                setIsClicked(false);
                            }}
                        />
                    </Div>

                    <Div gap="20px" alignItems="flex-start">
                        <Link
                            onClick={() => {
                                setIsClicked(false);
                            }}
                            to={"/"}
                            id="link-to-startsida"
                        >
                            <Span color="white" fontSize="30px">
                                Startsida
                            </Span>
                        </Link>

                        <Link
                            onClick={() => {
                                setIsClicked(false);
                            }}
                            to={"/bookings"}
                            id="link-to-boka-bord"
                        >
                            <Span color="white" fontSize="30px">
                                Boka bord
                            </Span>
                        </Link>

                        <Link
                            onClick={() => {
                                setIsClicked(false);
                            }}
                            to={"/contact"}
                            id="link-to-kontaktsida"
                        >
                            <Span color="white" fontSize="30px">
                                Kontaktsida
                            </Span>
                        </Link>
                    </Div>
                </Div>
            </Div>

            {/* OUTLET */}
            <Div flexGrow="1" height="auto" id="scrollToMain">
                <Outlet />
            </Div>
            {/* FOOTER */}
            <Div
                height="auto"
                width="100%"
                backgroundColor="#CFC99B"
                flexDirectionLaptop="row"
            >
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
                            <Link
                                to={"/contact"}
                                id="footer-contact-link"
                                onClick={scrollTop}
                            >
                                <Span
                                    fontSizeLaptop="1.5rem"
                                    fontSize="1.8rem"
                                    color="white"
                                >
                                    Kontakt
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
                            <Link to={"/"} onClick={scrollTop}>
                                <Span
                                    fontSizeLaptop="1.5rem"
                                    fontSize="1.8rem"
                                    color="white"
                                >
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
                            <Link to={"/bookings"} onClick={scrollTop}>
                                <Span
                                    fontSizeLaptop="1.5rem"
                                    fontSize="1.8rem"
                                    color="white"
                                >
                                    Boka bord
                                </Span>
                            </Link>
                        </Div>

                        <Image
                            cursor="pointer"
                            onClick={scrollTop}
                            displayLaptop="none"
                            src="/svg/bi_arrow-down-circle-fill.svg"
                            width="100px"
                            padding="20px"
                            id="page-up"
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
                        <Image
                            src="/svg/ph_copyright-light.svg"
                            width="5%"
                        ></Image>
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
            <Modal></Modal>
        </Div>
    );
};
