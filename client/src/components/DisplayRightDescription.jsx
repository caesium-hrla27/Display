import React from "react";
import style from "./modstyle.css";

class DisplayRightDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
	}
	
  render() {

    var show = (
      <div className={style.descriptionWrapper}>
        <div className={style.descriptionText}>
          <p>{this.props.front}</p>
        </div>

          <ul className={style.colorSKUUL}>
            <li className={style.colorSKULI}>
              Shown: { this.props.text_of_colors[this.props.current_color[1]] }
            </li>
            <li className={style.colorSKULI}>
						 	Style: {this.props.product_SKU}
						</li>
          </ul>
				
        <button className={style.readMoreButton}>
          <span>Read More</span>
        </button>
				<div style={{height:"30px"}}></div>
      </div>
		);
		
    return show;
  }
}

export default DisplayRightDescription;
