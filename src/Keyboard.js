import React from "react";

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      maj: false
    };
    this.keys = [
      "a",
      "z",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "suppr",
      "q",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "MAJ",
      "w",
      "x",
      "SPACE",
      "c",
      "v",
      "b",
      "n"
    ];
    this.keyboard = "";
  }

  render() {
    this.keyboard = this.keys.map((char, index) => {
      return (
        <button
          onClick={() => {
            console.log(char);
            console.log(this.state.maj);

            if (char === "MAJ") {
              return !!this.state.maj
                ? this.setState({ maj: false })
                : this.setState({ maj: true });
            }
            if (char === "suppr") {
              return this.setState({
                text: this.state.text.slice(0, -1)
              });
            }
            if (char === "SPACE") {
              return this.setState({
                text: this.state.text + "\xa0"
              });
            }
            if (this.state.maj) {
              return this.setState({
                text: this.state.text + char.toUpperCase()
              });
            }
            return this.setState({
              text: this.state.text + char
            });
          }}
          className="Keyboard--char"
          key={index}
        >
          {char}
        </button>
      );
    });
    return (
      <div className="area">
        <span className="output">output: {this.state.text}</span>
        <div className="Keyboard">{this.keyboard}</div>
      </div>
    );
  }
}
export default Keyboard;
