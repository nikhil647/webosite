import React from 'react';
import './Techpics.scss';

import Sky from 'react-sky';

import reactPic from './React.png';
import nodePic from './node.png';
import reduxPic from './logo.png';
import htmlPic from './HTML.png';
import css3Pic from './css3.png';
import jsPic from './js.png';
import loadshPic from './lodash.svg';
import reactRouterPic from './logo-react-router-removebg.png';
import atomPic from './atom.png';
import saasPic from './saas.png';


export default class Techpics extends React.Component {
  render() {
    return(
        <div className="Techpics">

        <Sky
       images={{
          0: reactPic,
          1: nodePic,
          2: reduxPic,
          3: htmlPic,
          4: css3Pic,
          5: jsPic,
          6: loadshPic,
          7: reactRouterPic,
          8: atomPic,
          9: saasPic,
          10: reactPic,
          11: nodePic,
          12: reduxPic,
          13: htmlPic,
          14: css3Pic,
          15: jsPic,
          16: loadshPic,
          17: reactRouterPic,
          18: atomPic,
          19: saasPic
       }}
       how={19} /* Pass the number of images Sky will render chosing randomly */
       time={4} /* time of animation */
       size={'70px'} /* size of the rendered images */
       background={'#D7E2EA'} /* color of background */
     />

        </div>
    )
  }
}
