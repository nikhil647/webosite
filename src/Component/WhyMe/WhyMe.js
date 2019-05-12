import React from 'react';
import './WhyMe2.scss';


export default class WhyMe extends React.Component {
  render() {

    let forTextClassName,WhyMeClassName,ActualCardClassName,ImageIconHolderClassName;


    if(this.props.NightMode) {
      forTextClassName="forText bounce night";
      WhyMeClassName="WhyMe night";
      ActualCardClassName="ActualCard night";
        ImageIconHolderClassName="image-icon-holder night"
    }
    else{
      forTextClassName="forText bounce";
      WhyMeClassName="WhyMe";
      ActualCardClassName="ActualCard";
      ImageIconHolderClassName="image-icon-holder"
    }

    return(
      <div className={WhyMeClassName}>

        <div className={forTextClassName}>
            Why me ?
        </div>

        <div className="CardHolder">

        <div className="TwoCardHolder">

                <div className="card">

                  <div className={ActualCardClassName}>


                      <div className={ImageIconHolderClassName}>

                        <i className="material-icons">mobile_friendly</i>
                      </div>

                      <div className="text-Heading">
                        Responsive
                      </div>

                      <div className="text-Description">
                        My layouts will work on any device, big or small
                      </div>



                    </div>
                  </div>

                <div className="card">

                                                  <div className={ActualCardClassName}>


                                                      <div className={ImageIconHolderClassName}>

                                                      <i className="material-icons">sentiment_satisfied_alt</i>
                                                      </div>

                                                      <div className="text-Heading">
                                                        Passionate
                                                      </div>

                                                      <div className="text-Description">
                                                        I <i className="fa fa-heart"></i>  being Web-developer<br /> It is extremly creative profession
                                                      </div>

                                                    </div>
                </div>

        </div>

        <div className="TwoCardHolder">

            <div className="card">


                                              <div className={ActualCardClassName}>


                                                  <div className={ImageIconHolderClassName}>

                                                      <i className="material-icons">bubble_chart</i>
                                                  </div>

                                                  <div className="text-Heading">
                                                    Intuitive
                                                  </div>

                                                  <div className="text-Description">
                                                    Strong preference for easy to use, intuitive UX/UI.
                                                  </div>

                                                </div>

              </div>

              <div className="card">


                                                <div className={ActualCardClassName}>


                                                    <div className={ImageIconHolderClassName}>

                                                    <i className="material-icons">wc</i>
                                                    </div>

                                                    <div className="text-Heading">
                                                      Team player
                                                    </div>

                                                    <div className="text-Description">
                                                      Always try to give excellent performance
                                                    </div>

                                                  </div>

                    </div>

        </div>

        </div>

      </div>
    )

  }
}
