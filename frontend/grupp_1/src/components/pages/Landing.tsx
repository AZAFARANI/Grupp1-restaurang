import { CustomSpan } from "../Styled/CustomSpan";
import { GlassDiv, GlassDiv2 } from "../Styled/GlassmorphDiv";
import { InputText } from "../Styled/StyledInputTypeText";
import "../../scss/Landing.scss";
import { CustomDiv } from "../Styled/CustomDiv";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <div className="bigContainer">
        <CustomDiv>
          <div className="hero-div">
            <img src="/svg/Logo.svg" className="logotype"></img>

            <Link to={"/booking"}>
              <GlassDiv
                className="bookingButton"
                border="solid 1px hsla(0, 14%, 82%, 1)"
                background="hsla(357, 48%, 70%, 0.85)"
                blur="hsla(0, 0%, 0%, 0.25)"
              >
                <CustomSpan fontSize="1.4rem" color="white">
                  Boka bord
                </CustomSpan>
              </GlassDiv>
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
        </CustomDiv>

        <CustomDiv
          gap="2vh"
          justifyContent="unset"
          className="customdiv"
          backgroundImage="url(/images/jorge-zapata-4nXkhLCrkLo-unsplash.jpg)"
        >
          <img src="/svg/Title.svg"></img>
          <img id="svgg" src="/svg/Vinflaska.svg"></img>

          <GlassDiv2
            background="hsla(0, 0%, 100%, 0.8);

"
          >
            <div className="menuContainer">
              <div>
                <CustomSpan>
                  <img src="/svg/Vector 6.svg"></img> Pasta
                  <img src="/svg/Vector 7.svg"></img>
                  <hr></hr>
                  <br></br>
                </CustomSpan>

                <div>
                  <div className="menuItems">
                    <CustomSpan>Pasta carbonara</CustomSpan>
                    <CustomSpan>149kr</CustomSpan>
                  </div>
                  <br></br>
                  <div className="menuItems">
                    <CustomSpan>Pasta Al Tonno</CustomSpan>
                    <CustomSpan>149kr</CustomSpan>
                  </div>
                </div>
              </div>

              <div>
                <CustomSpan>
                  <img src="/svg/Vector 6.svg"></img> Pizza
                  <img src="/svg/Vector 7.svg"></img>
                  <hr></hr>
                  <br></br>
                </CustomSpan>
                <div className="menuItems">
                  <CustomSpan>Pizza Capriociosa</CustomSpan>
                  <CustomSpan>190kr</CustomSpan>
                </div>
                <br></br>
                <div className="menuItems">
                  <CustomSpan>Pizza Mozarella</CustomSpan>
                  <CustomSpan>199kr</CustomSpan>
                </div>
                <br></br>
                <div className="menuItems">
                  <CustomSpan>Pizza Caprese</CustomSpan>
                  <CustomSpan>199kr</CustomSpan>
                </div>
              </div>
            </div>
          </GlassDiv2>
        </CustomDiv>
      </div>
    </>
  );
}
