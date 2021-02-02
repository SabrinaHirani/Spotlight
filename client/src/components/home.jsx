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
      <h3 className="heading-about">Take ♀: Lights, Camera, Action!</h3>
      <p className="paragraph-about">
      As a woman aspiring to go into STEM, I find it upsetting that there aren't many female role models for me to look up to. Among all the Steve Jobs, Bill Gates, Mark Zuckerbergs, and Elon Musks, it's hard to find a Sheryl Sandberg. The reason for that? Women only make up 27% of professionals in STEM.<br /><br />

      Gender discrimination comes down to perception. If women were percieved to be as capable as men, gender inequality would not exist. The media has considerable jurisdiction over our perception. For this reason, the media is a driving force behind gender discrimination. Underepresentation, misrepresentation, and sexualization of men is not found in the media. Why is this not the case for women? Pre-existing socially constructed gender sterotypes are amplified by the media, discouraging young girls to stray from acting in a more 'feminine' manner, and creating a vicious cycle of gender sterotyping. <br /><br />

      At Spotlight, we believe that gender is not equal to identity. We aspire to create a world where women can grow up to be scientists, technologists, engineers, and mathematicians. With the help of artificial intelligence and machine learning technologies, we can identify gender stereotypes in media content and bring gender injustice into the spotlight. We want to reverse the vicious cycle of gender stereotyping. This is take 	♀: Lights, Camera, Action!

      </p>
      <a href="/checker"><button className="spotlight-action">Go to Spotlight</button></a>
      </div>
      <hr className="footer" />
      </div>
    );
  }

}

export default Home;
