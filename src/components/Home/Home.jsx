import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import homeAnime from './../../assets/home_anime.gif';
import Modal from '../Modal/Modal';

class Home extends Component{
  state={showModal: false};
  componentDidMount(){
    setTimeout(()=>{
        this.setState({showModal: true});
      }, 2400);
    }

    closeModal=()=>{
      this.setState({showModal: false});
    };

    render(){
        return (
          <div className="home-container">
            {this.state.showModal && <Modal closeModal={this.closeModal} />}
            <div className="header-text">
              <h1>Welcome to my portfolio!!</h1>
              <p> I'm Rishabh, a hustler, learner and a thinker!!</p>
            </div>
            <div className="head-btns">
              <Link to="/about" className="btn btn-white">
                <p className="btn-text">Know more about me</p>
              </Link>

              <Link to="/contact" className="btn btn-transparent">
                <p className="btn-text">Connect with me</p>
              </Link>
            </div>
            <div className="splash-image">
              <img src={homeAnime} alt="animation" className="home-anime" />
            </div>
          </div>
        );
    }
}
export default Home;