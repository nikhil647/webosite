import React from 'react';
import './Footer.scss';

import insta from './instagram.svg';
import github from './github.svg';
import stackOverflow from './so-icon.svg';


export default class Footer extends React.Component {

  visitLink=(Link) => {
        window.open(Link, '_blank');
  }


  render() {

      let FooterClassName;

      if(this.props.NightMode) {
            FooterClassName="Footer night"
      }
      else {
          FooterClassName="Footer"
      }


    return(
        <div className={FooterClassName}>

          <div className="iconProfiles" >
            <div className="item" onClick={() => this.visitLink("https://www.instagram.com/nikhil.patil.647/")}>
                <img src={insta} alt="icon ?" height="100%" width="100%" />
            </div>
            <div className="item" onClick={() => this.visitLink("https://stackoverflow.com/users/10778959/nikhil-patil")}>
                <img src={stackOverflow} alt="icon ?" height="100%" width="100%" />
            </div>
            <div className="item" onClick={() => this.visitLink("https://github.com/Nikhil-devloper")}>
                  <img src={github} alt="icon ?" height="100%" width="100%" />
            </div>

          </div>

          <div className="LastLine">
            Nikhil Patil &#169; 2019
          </div>

        </div>
    )
  }
}
