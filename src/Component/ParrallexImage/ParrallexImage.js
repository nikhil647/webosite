import React from 'react';
import './ParrallexImage.scss';
import { Parallax } from "react-parallax";
import image from './code.jpg';


export default class ParrallexImage extends React.Component {


  render() {

    const insideStyles = {
  background: "rgba(255,255,255,0.8)",
  padding: 20,
  height: "200%",
  width: "200%",

  transform: "translate(-50%,-50%)"
};

  if(this.props.NightMode) {
    insideStyles.background="rgba(0,0,0,0.5)"
  }

    return(
            <div>            <Parallax bgImage={image} strength={1000}>
   <div style={{ height: 250 }}>
     <div style={insideStyles}>HTML inside the parallax</div>
   </div>
 </Parallax>
             </div>
  );
  }
}
