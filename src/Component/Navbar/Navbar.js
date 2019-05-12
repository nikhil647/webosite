import React from 'react';
import './Navbar.scss';
import myResume from './Nikhil.pdf';


class Navbar extends React.Component {
  constructor(props) {
      super(props)

      this.myRef = React.createRef();
  }

  ResumeLink=() => {
        window.open(myResume,'_blank');
}

  gotoProject=(str) => {
    this.props.gotoProject(str)
  }

    nightModeHandler= () => {
          this.props.nightModeHandler()
    }

  render() {

    let NavbarComponentClassName,ModeIcon;

    if(this.props.Mode) {
          //night mode code
          NavbarComponentClassName = "Navbar-Component night";
          ModeIcon=<i className="fa fa-bolt"> </i>;

    }
    else {
        //day mode code
              NavbarComponentClassName = "Navbar-Component";
              ModeIcon=<i className="fa fa-star bounce"></i>;
    }

    return(

      <div className={NavbarComponentClassName} ref={this.myRef}>

          <div className="Logo-Name"> N<span style={{color: "#CEAB12"}}>i</span>kh<span style={{color: "#CEAB12"}}>i</span>l </div>

          <div className="Spacer"/>

          <div className="Other-Nav-Component">
            <div className="Nav-item" onClick={this.ResumeLink}>
                <div className="icon-holder"><i className="fa fa-file"></i> </div>
              <div className="Nav-item-text" > Resume </div>
            </div>

            <div className="Nav-item" onClick={ () => this.gotoProject("Project")}>
                <div className="icon-holder"><i className="fa fa-trophy"></i> </div>
                <div className="Nav-item-text"> Projects </div>
            </div>

            <div className="Nav-item" onClick={ () => this.gotoProject("Contact")}>
                <div className="icon-holder"><i className="fa fa-envelope-open"></i> </div>
                <div className="Nav-item-text"> Contact </div>
            </div>
            <div className="Nav-item" title="Change Mode" onClick={this.nightModeHandler}>
                <div className="icon-holder">{ModeIcon}</div>

            </div>

          </div>


      </div>
    )
  }

  componentDidMount() {

    var myNav =this.myRef.current;
    window.onscroll = function () {

    if (this.scrollY >= 10 ) {
        myNav.classList.add("nav-colored");
    }
    else {
        myNav.classList.remove("nav-colored");
    }
  }

  }

}

export default Navbar;
