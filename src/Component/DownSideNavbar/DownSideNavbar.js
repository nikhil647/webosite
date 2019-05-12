import React from 'react';
import './DownSideNavbar.scss';
import myResume from '../Navbar/Nikhil.pdf';

class DownSideNavbar extends React.Component {

      nightModeHandler= () => {
            this.props.nightModeHandler()
      }

      OpenLink=() => {
            window.open(myResume,'_blank');
      }

      gotoProject=(str) => {
        this.props.gotoProject(str)
      }

  render() {
    let Modeicon,ModeText;

    if(this.props.Mode) {
      //night Mode
        Modeicon=<i className="material-icons">wb_sunny</i>;
        ModeText="Day"
    }
    else{
      //day Mode

        Modeicon=<i className="material-icons">star</i>;
        ModeText="Night"
    }

    return(
        <div className="DownSideNavbar">

              <div className="small-item" onClick={() => this.gotoProject("Home")}>

                <div className="small-item-iconHolder">
                <i className="material-icons">home</i>
                </div>
                <div className="small-item-textHolder" >
                  Home
                </div>

              </div>

              <div className="small-item" onClick={this.OpenLink}>


                <div className="small-item-iconHolder">
                <i className="material-icons">insert_drive_file</i>
                </div>
                <div className="small-item-textHolder">
                  Resume
                </div>


              </div>

              <div className="small-item" onClick={() => this.gotoProject("Project")}>

                    <div className="small-item-iconHolder">
                    <i className="material-icons">next_week</i>
                    </div>
                    <div className="small-item-textHolder">
                        Projects
                   </div>
              </div>

              <div className="small-item" onClick={() => this.gotoProject("Contact")}>
                                  <div className="small-item-iconHolder">
                                  <i className="material-icons">mail</i>
                                  </div>
                                  <div className="small-item-textHolder">
                                      Contact
                                 </div>
              </div>

              <div className="small-item" onClick={this.nightModeHandler}>
              <div className="small-item-iconHolder">
                  {Modeicon}
              </div>
              <div className="small-item-textHolder">
                  {ModeText}
             </div>
              </div>

        </div>
    )

  }
}

export default DownSideNavbar;
