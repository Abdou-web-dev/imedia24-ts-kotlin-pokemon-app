import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStyleMediaQuery } from "../hooks/UseMediaQuery";
import "./pages_styles.scss";

const pikachu = require("../assets/img/pikachu.png"); //this is how we import images in TS

const Intro = () => {
  const [showIcon, setshowIcon] = useState<boolean>(false);
  const [showGoBtn, setshowGoBtn] = useState<boolean>(false);

  const { matches: isMobile } = useStyleMediaQuery("max", "width", 700); //520px and less
  let isDesktop = !isMobile;

  return (
    <div className="poke-intro-container">
      <div className="poke-intro-container-welcome">
        <p role={`welcome`}>Welcome to this Pokemon React App : </p>
      </div>

      <div className="poke-intro-container-pokeball-anim">
        <div
          className="center-on-page pokeball-wrapper"
          onMouseOver={() => {
            setshowGoBtn(true);
          }}
          onMouseLeave={() => {
            setshowGoBtn(!showGoBtn);
          }}
        >
          <div
            className={
              isDesktop ? "pokeball" : isMobile ? "pokeball-reversed" : ""
            }
          >
            <div className="pokeball__button"></div>
          </div>

          {/* go btn */}
          {isDesktop && (
            <div className="poke-intro-go-btn-wrapper">
              {showGoBtn ? (
                <Link to={`/home`} className="poke-intro-go-btn-wrapper-link">
                  <Button
                    aria-label="go-btn-label"
                    role={`go-btn`}
                    className="poke-intro-go-btn"
                  >
                    <span>{`Go`}</span>
                  </Button>
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {/* begin btn */}
      {isDesktop ? (
        <div className="poke-intro-container-btn">
          <Link to={`/home`} className="poke-intro-container-link">
            <Button
              //for cypress e2e test
              role="begin-role-btn"
              data-testid="begin-btn-id"
              aria-label="begin-btn-label"
              className="poke-intro-btn"
              onMouseOver={() => {
                setshowIcon(true);
              }}
              onMouseLeave={() => {
                setshowIcon(!showIcon);
              }}
            >
              {showIcon && <img src={pikachu} alt="" />}
              <span>{`Begin`}</span>
            </Button>
          </Link>
        </div>
      ) : null}

      {/* start btn */}
      {isMobile ? (
        <div className="poke-intro-start-container-btn">
          <Link to={`/home`} className="poke-intro-start-container-link">
            <Button
              //for cypress e2e test
              role="start-role-btn"
              data-testid="start-btn-id"
              aria-label="start-btn-label"
              className="poke-start-btn"
            >
              {/* {showIcon && <img src={pikachu} alt="" />} */}
              <span>{`start`}</span>
            </Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Intro;
