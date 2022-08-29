import "../../scss/Landing.scss";
import { Link } from "react-router-dom";
import { Div } from "../Styled/Div";
import { GlassmorphDiv } from "../Styled/GlassmorphDiv";
import { Span } from "../Styled/Span";

export default function Landing() {
    return (
        <>
            <div className="bigContainer">
                <Div>
                    <div className="hero-div">
                        <img src="/svg/Logo.svg" className="logotype"></img>

                        <Link to={"/booking"}>
                            <GlassmorphDiv
                                className="bookingButton"
                                border="solid 1px hsla(0, 14%, 82%, 1)"
                                background="hsla(357, 48%, 70%, 0.85)"
                                blur="hsla(0, 0%, 0%, 0.25)"
                            >
                                <Span fontSize="1.4rem" color="white">
                                    Boka bord
                                </Span>
                            </GlassmorphDiv>
                        </Link>
                    </div>

                    <svg
                        id="whiteArrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="white"
                        className="bi bi-arrow-down-circle-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                    </svg>
                </Div>

                <Div
                    gap="2vh"
                    justifyContent="unset"
                    className="Div"
                    backgroundImage="url(/images/jorge-zapata-4nXkhLCrkLo-unsplash.jpg)"
                >
                    <img src="/svg/Title.svg"></img>
                    <img id="svgg" src="/svg/Vinflaska.svg"></img>

                    <GlassmorphDiv
                        height="70vh"
                        width="95%"
                        background="hsla(0, 0%, 100%, 0.8);

"
                    >
                        <div className="menuContainer">
                            <div>
                                <Span>
                                    <img src="/svg/Vector 6.svg"></img> Pasta
                                    <img src="/svg/Vector 7.svg"></img>
                                    <hr></hr>
                                    <br></br>
                                </Span>

                                <div>
                                    <div className="menuItems">
                                        <Span>Pasta carbonara</Span>
                                        <Span>149kr</Span>
                                    </div>
                                    <br></br>
                                    <div className="menuItems">
                                        <Span>Pasta Al Tonno</Span>
                                        <Span>149kr</Span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Span>
                                    <img src="/svg/Vector 6.svg"></img> Pizza
                                    <img src="/svg/Vector 7.svg"></img>
                                    <hr></hr>
                                    <br></br>
                                </Span>
                                <div className="menuItems">
                                    <Span>Pizza Capriociosa</Span>
                                    <Span>190kr</Span>
                                </div>
                                <br></br>
                                <div className="menuItems">
                                    <Span>Pizza Mozarella</Span>
                                    <Span>199kr</Span>
                                </div>
                                <br></br>
                                <div className="menuItems">
                                    <Span>Pizza Caprese</Span>
                                    <Span>199kr</Span>
                                </div>
                            </div>
                        </div>
                    </GlassmorphDiv>
                </Div>
            </div>
        </>
    );
}
