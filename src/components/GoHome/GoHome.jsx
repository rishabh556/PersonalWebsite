import React, { Component } from "react";
import { withRouter } from "react-router";
import homeIconWhite from "./../../assets/home_white.png";
import homeIconBlack from "./../../assets/home_black.png";
import "./GoHome.css";

//This is to learn programmatic navigation ...it can be easily done by using link component(user navigation)

class GoHome extends Component {

  navigateToHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
      const {location}=this.props;
      const whiteBtn=location.pathname==='/';
    return (
      <button
        className={`go-home-btn ${whiteBtn ? "white-bkg" : "gradient-bkg"}`}
        onClick={this.navigateToHome}
      >
        <img className='home-icon' src={whiteBtn ? homeIconBlack : homeIconWhite} alt="home-icon" />
      </button>
    );
  }
}

export default withRouter(GoHome);
