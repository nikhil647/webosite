import React from "react";
import './ContactMe.scss';

export default class ContactMe extends React.Component {

  render() {

    let ContactMeClassName;

      if(this.props.NightMode) {
              ContactMeClassName="ContactMe night"
      }
      else {
        ContactMeClassName="ContactMe"
      }



    return (
      <div className={ContactMeClassName}>
            <div className="ContactMeText"><span className="rubberBand"> Contact Me </span>   </div>
            <div className="ContactBoxHolder">

              <div className="Box">
              <i className="material-icons">email</i>

                <div className="NameDetails">
                  Email
                    <br /><br />
                  developer.nikhilpatil@gmail.com
                </div>

              </div>

              <div className="Box">
              <i className="material-icons">phone</i>
              <div className="NameDetails">
                Mobile(WhatsApp)
                  <br /><br />
                  7767064219
              </div>

              </div>
              <div className="Box">
                <i className="material-icons">room</i>
                <div className="NameDetails">
                  Address
                    <br /><br />
                    Bhiwandi ,Thane, Maharastra
                </div>
              </div>

            </div>
            <hr />
    </div>
  )
  }
}
