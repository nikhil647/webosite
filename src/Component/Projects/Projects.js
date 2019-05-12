import React from 'react';
import './Projects.scss';
import meme from './meme.jpeg';
import todo from './todo.jpg'
import dragon from './dragon.jpeg';
import youtube from './youtube.jpg';
import sec from './sec.jpeg';

export default class Projects extends React.Component {

  visitProject =(link) => {

      window.open(link, '_blank');

  }

  render() {

    let SampleWorkClassName,ProjectCardClassName;

    if(this.props.NightMode) {
        SampleWorkClassName="SampleWork night"
        ProjectCardClassName="Project-Card night"
    }
    else {
        SampleWorkClassName="SampleWork"
        ProjectCardClassName="Project-Card"
    }

    return(
      <div className={SampleWorkClassName}>
          <div className="SampleWorkHeading shake"> Sample Work <i className="material-icons">arrow_right_alt</i> </div>

          <div className="Project-Card-Holder">

            <div className={ProjectCardClassName} onClick={() => this.visitProject("http://meme-creator.myartsonline.com/")}>
                <div className="Project-Card-ImageHolder">
                  <img src={meme} alt="pic ?" height="100%" width="100%"/>
                </div>
                <div className="Project-Title1"> Meme Genrator </div>
                <div style={{display: "flex",justifyContent: "center",color: "red" }}> working </div>
                <div className="Project-Description1">
                    &nbsp;&nbsp; A simple meme creator you can edit trending meme or you can upload your own pic
                </div>
            </div>


                        <div className={ProjectCardClassName} onClick={() => this.visitProject("http://todo-app.myartsonline.com/")}>
                            <div className="Project-Card-ImageHolder">
                              <img src={todo} alt="pic ?" height="100%" width="100%"/>
                            </div>
                            <div className="Project-Title"> To-do App </div>
                            <div className="Project-Description">
                                &nbsp;&nbsp; App used to store Important note and list acording to the priority,
                            </div>
                        </div>

                        <div className={ProjectCardClassName} onClick={() => this.visitProject("http://dragon-search.mypressonline.com/")}>
                            <div className="Project-Card-ImageHolder">
                              <img src={dragon} alt="pic ?" height="100%" width="100%"/>
                            </div>
                            <div className="Project-Title"> Image Search </div>
                            <div className="Project-Description">
                                &nbsp;&nbsp; A high quality Image search app made by photographer's collection
                            </div>
                        </div>


                                                <div className={ProjectCardClassName} onClick={() => this.visitProject("http://videos-tube.getenjoyment.net/")}>
                                                    <div className="Project-Card-ImageHolder">
                                                      <img src={youtube} alt="pic ?" height="100%" width="100%"/>
                                                    </div>
                                                    <div className="Project-Title"> Video-Tube </div>
                                                    <div className="Project-Description">
                                                        &nbsp;&nbsp; You-tube dummy app mocking user interface using youtube api.
                                                    </div>
                                                </div>


                                            <div className={ProjectCardClassName} onClick={() => this.visitProject("http://net-sec-project.onlinewebshop.net/")}>
                                                <div className="Project-Card-ImageHolder">
                                                  <img src={sec} alt="pic ?" height="100%" width="100%"/>
                                                </div>
                                              <div className="Project-Title"> Security Project </div>
                                                  <div className="Project-Description">
                                              &nbsp;&nbsp; The security project uses three encryption algorithm to encrypt and decrypt messages.
                                              </div>
                                            </div>
          </div>

      </div>
    );
  }
}
