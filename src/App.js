import React from 'react';
import './App.scss';
import PageProgess from 'react-page-progress';
import HomePage from './Component/HomePage/HomePage.js';
import WhyMe from './Component/WhyMe/WhyMe.js';
import Projects from './Component/Projects/Projects.js';
import ParrallexImage from './Component/ParrallexImage/ParrallexImage.js';
import Techpics from './Component/Techpics/Techpics.js';
import Technology from './Component/Technology/Technology.js';
import ContactMe from './Component/ContactMe/ContactMe.js';
import Footer from './Component/Footer/Footer.js';
import scrollToComponent from 'react-scroll-to-component';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.myPro = React.createRef();
    this.myContact = React.createRef();
    this.myHome = React.createRef();
  }

  state = {
    NightMode: false
  }

  nightModeHandler= () => {
      this.setState({NightMode: !this.state.NightMode})
  }


  gotoProject=(str) => {
    if(str==="Project")
        scrollToComponent(this.myPro.current,{align: 'top'})
    if(str==="Contact")
      scrollToComponent(this.myContact.current,{align: 'top'})
    if(str==="Home")
      scrollToComponent(this.myHome.current,{align: 'top'})
  }

  render() {




    return (
    <div className="Fullpage">
        <PageProgess color={"#FAD53A"} height={5} />
        <div ref={this.myHome} />
        <HomePage nightModeHandler={this.nightModeHandler} Mode={this.state.NightMode} gotoProject={this.gotoProject} />
        <WhyMe NightMode={this.state.NightMode} />
        <ParrallexImage NightMode={this.state.NightMode} />
        <div ref={this.myPro} />
        <Projects NightMode={this.state.NightMode}/>


        <Techpics />
        <Technology NightMode={this.state.NightMode} />
        <div ref={this.myContact} />
        <ContactMe NightMode={this.state.NightMode}/>

        <Footer NightMode={this.state.NightMode} />
        <div className="HideMeInPc" style={{height: "15vh" }}> </div>
    </div>
  );
  }
}

export default App;
