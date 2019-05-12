import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import DownSideNavbar from '../DownSideNavbar/DownSideNavbar.js';


import './HomePage.scss';
import avtar from './avtar.svg';

class HomePage extends React.Component {

    nightModeHandler= () => {
        this.props.nightModeHandler()
    }


        gotoProject=(str) => {

          this.props.gotoProject(str);
        }

  render() {

    console.log(this.props.Mode)

    let HomePageClassName,InfoTextClassName,HelloClassName;


    if(this.props.Mode){
      //code for Night Mode
      HomePageClassName="HomePage night"
      InfoTextClassName="Info-text night"
      HelloClassName="Hello night"
    }
    else {
      //code for Day NightMode
      HomePageClassName="HomePage"
      InfoTextClassName="Info-text"
      HelloClassName="Hello"
    }


      return(
        <div className={HomePageClassName}>

          <Navbar nightModeHandler={this.nightModeHandler} Mode={this.props.Mode} gotoProject={this.gotoProject} />
          <DownSideNavbar nightModeHandler={this.nightModeHandler} Mode={this.props.Mode} gotoProject={this.gotoProject} />

          <div className="Me-And-Myself">
              <div className="TwoBoxHolder">
                  <div className="Image-Holder">
                    <img src={avtar} alt="pic ?" height="100%" width="300px" />
                  </div>
                  <div className="Info">
                      <br />
                      <div className={HelloClassName}> Hello World! </div>
                      <br />                      <br />
                      <div className={InfoTextClassName}>
                          I'm <span style={{backgroundColor: "#CEAB12"}}>Nikhil Patil</span> <br /><br />
                          -<span style={{backgroundColor: "#CEAB12"}}>Front End Developer</span> who loves developing web application in <span style={{backgroundColor: "#CEAB12"}}> React Js</span>.
                      </div>
                    </div>
                </div>
            </div>
        </div>
      )
  }
}

export default HomePage;
