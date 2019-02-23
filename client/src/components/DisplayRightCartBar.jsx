import React from "react";
import style from './modstyle.css'

class DisplayRightCartBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var show = (
      <div className= {style.cartBarContainer}>
        <button className = {style.cartLeft}>Add To Cart</button>
        <button className = {style.cartRight}> {"<3"}</button>
      </div>
    );
    return show;
	}
	
}

export default DisplayRightCartBar;
