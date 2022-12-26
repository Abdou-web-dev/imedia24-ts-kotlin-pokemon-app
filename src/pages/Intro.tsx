import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./pages_styles.scss";

const pikachu = require("../assets/img/pikachu.png"); //this is how we import images in TS

const Intro = () => {
  const [showIcon, setshowIcon] = useState<boolean>(false);
  const [showGoBtn, setshowGoBtn] = useState<boolean>(false);

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
          <div className="pokeball">
            <div className="pokeball__button"></div>
          </div>
          <div className="poke-intro-go-btn-wrapper">
            {showGoBtn ? (
              <Link to={`/home`} className="poke-intro-go-btn-wrapper-link">
                <Button className="poke-intro-go-btn">
                  <span>{`Go`}</span>
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      <div className="poke-intro-container-btn">
        <Link to={`/home`} className="poke-intro-container-link">
          <Button
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
    </div>
  );
};

export default Intro;
