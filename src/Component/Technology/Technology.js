import React from 'react';
import './Technology.scss';

export default class Technology extends React.Component {
  render() {

    let TechnologyClassName,TechWorkHeadingClassName;

    if(this.props.NightMode) {
        TechnologyClassName="Technology night";
        TechWorkHeadingClassName="TechWorkHeading swing night"
    }
    else{
      TechnologyClassName="Technology";
      TechWorkHeadingClassName="TechWorkHeading swing"
    }

    return(
      <div className={TechnologyClassName}>
              <div className={TechWorkHeadingClassName}> Technology </div>

<div className="TechImageContainer">
              <marquee behavior="ALTERNATE">
                                <i className="devicon-html5-plain-wordmark colored"></i>

                                <i className="devicon-css3-plain-wordmark colored"></i>

                                <i className="devicon-javascript-plain colored"></i>

                                <i className="devicon-nodejs-plain-wordmark colored"></i>

                                <i className="devicon-react-original-wordmark colored"></i>

                                <i className="devicon-sass-original colored"></i>

                               <i className="devicon-atom-original colored" ></i>

                               <i className="devicon-babel-plain colored"></i>

                               <i className="devicon-bootstrap-plain-wordmark colored"></i>

                               <i className="devicon-github-plain-wordmark colored"></i>
              </marquee>
</div>


      </div>
  );
  }
}
