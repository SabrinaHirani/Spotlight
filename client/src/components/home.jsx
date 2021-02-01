import React from "react";
import "../styles.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }

    this.moveTorch = this.moveTorch.bind(this);
    }

    moveTorch = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      });
      var torch = document.getElementById("torch");
      torch.style.top = this.state.y + 'px';
      torch.style.left = this.state.x + 'px';
    }

  render() {
    return (
      <div className="home">
      <div className="header" onMouseMove={this.moveTorch}>
          <div id="torch"></div>
      <center>
      <div className="heading">
      <img
      className="logo"
      src={require("../media/graphics/logo-romantic.png").default}
      alt="" />
      <span className="heading-main">Spotlight</span>
      <p className="subtitle-main">Bringing gender injustices into the spotlight</p>
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
