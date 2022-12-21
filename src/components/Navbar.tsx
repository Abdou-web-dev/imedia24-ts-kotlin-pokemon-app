import { Button } from "antd";
import { Link } from "react-router-dom";
// import accueil from "../assets/img/accueil.png";
import "./nav_styles.scss";
const accueil = require("../assets/img/accueil.png"); //this is how we import images in TS

export const Navbar = () => {
  return (
    <>
      <div className="poke-navbar-container">
        <Link to={`/intro`} style={{ textDecoration: "none" }}>
          <Button className="poke-navbar-container-btn">
            <img src={accueil} alt="" />
            <span>{`Home`}</span>
          </Button>
        </Link>
      </div>
    </>
  );
};

// This react-scripts/scripts and react-scripts/config folder contains all the webpack configurations.
