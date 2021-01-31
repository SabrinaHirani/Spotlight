import React from "react";
import "../styles.css";

class Checker extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      ff: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Access-Control-Allow-Origin", "*");

      var raw = document.getElementById("textarea-input-checker").value;

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      console.log(requestOptions)

      fetch("http://127.0.0.1:5000/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error: ', error));
    }

    // handleSubmit() {
    //   fetch('http://127.0.0.1:5000/', {
    //     method: 'POST',
    //     headers: {
    // 'Content-Type': 'application/json',
    //   },
    //     body: document.getElementById("textarea-input-checker").value
    //   }).then((response) => {
    //     alert('done')
    //     console.log(response);
    //   })
    // }

  render() {
    if (this.state.ff == 0) {
      return (
        <div className="checker">
        <div className="heading-checker">
        <a href="/home"><img
        className="logo"
        src={require("../media/graphics/logo-finn.png").default}
        alt="" />
        <span className="heading-main-checker">Spotlight</span></a>
        <p className="subtitle-main-checker">Bringing Gender Injustices into the Spotlight</p>
        </div>
        <div>
        <center>
        <p className="subtitle-pick-format">Pick A Format:</p>
        <div className="format-options-checker">
        <button className="format-toggle-checker-left" onClick={() => {this.setState({ff: 0})}}>Plain Text</button>
        <button className="format-toggle-checker" onClick={() => {this.setState({ff: 1})}}>Word</button>
        <button className="format-toggle-checker-right" onClick={() => {this.setState({ff: 2})}}>PDF</button>
        </div>
        </center>
        </div>
        <div className="form-checker">
        <textarea className="form-input-textarea-checker" type="text" id="textarea-input-checker" name="textarea-input-checker" /><br/>
        <input className="form-submit-checker" onClick={this.handleSubmit} type="submit" value="Check" />
        </div>
        <hr className="footer" />
        </div>
      );
    } else {
      return (
        <div className="checker">
        <div className="heading-checker">
        <a href="/home"><img
        className="logo"
        src={require("../media/graphics/logo-finn.png").default}
        alt="" />
        <span className="heading-main-checker">Spotlight</span></a>
        <p className="subtitle-main-checker">Bringing Gender Injustices into the Spotlight</p>
        </div>
        <div>
        <center>
        <p className="subtitle-pick-format">Pick A Format:</p>
        <div className="format-options-checker">
        <button className="format-toggle-checker-left" onClick={() => {this.setState({ff: 0})}}>Plain Text</button>
        <button className="format-toggle-checker" onClick={() => {this.setState({ff: 1})}}>Word</button>
        <button className="format-toggle-checker-right" onClick={() => {this.setState({ff: 2})}}>PDF</button>
        </div>
        </center>
        </div>
        <div className="form-checker">
        <form onSubmit={this.handleSubmit}>
        <input className="form-input-file-checker" type="file" id="file-input-checker" name="file-input-checker" /><br/>
        <input className="form-submit-checker" type="submit" value="Check" />
        </form>
        </div>
        <hr className="footer" />
        </div>
      );
    }
  }

}

export default Checker;
