import React from "react";
import style from "./modstyle.css";

class DisplayRightColors extends React.Component {

  constructor(props) {
    super(props);

  }

  showColors(id, colors) {
    var result = [];

    for (let i = 0; i < colors.length; i++) {
      result.push(
        <div className={style.pictureWrapper}>
          <img
            className={style.colorThumb}
            src={
              this.props.pichost +
              id.toLowerCase() +
              colors[i].toLowerCase() +
              "o0.jpg"
            }
            title={this.props.text_of_colors[i]}
            style={{ width: "100%", height: "100%" }}
            id={"C" + i}
            onClick={this.props.changeCurrentColor}
          />
        </div>
      );
    }
    return result;
  }

  render() {
    var show = (
      <div className={style.colorsWrapper}>
        {this.showColors(this.props.shoe_id, this.props.colors)}
      </div>
    );

    return show;
  }
}

export default DisplayRightColors;
