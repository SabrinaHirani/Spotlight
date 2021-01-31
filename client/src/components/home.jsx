import React from "react";
import "../styles.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    }

  render() {
    return (
      <div className="home">
      <div id="light"></div>
      <div className="header">
      <center>
      <div className="heading">
      <img
      className="logo"
      src={require("../media/graphics/logo-romantic.png").default}
      alt="" />
      <span className="heading-main">Spotlight</span>
      <p className="subtitle-main">Bringing Gender Injustices into the Spotlight</p>
      </div>
      </center>
      </div>
      <div className="about">
      <h3 className="heading-about">Bring it to Light</h3>
      <p className="paragraph-about">
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      Blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah

      </p>
      <a href="/checker"><button className="spotlight-action">Go to Spotlight</button></a>
      </div>
      <hr className="footer" />
      </div>
    );
  }

}

export default Home;
