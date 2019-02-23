import React from "react";
import styled from "styled-components";
import style from "./modstyle.css";

class DisplayRightSizeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  showSizes(sizes) {
    var output = [];
    for (let i = 6.5; i <= 15; i += 0.5) {
      output.push(<input className={style.sizeInput} id={"butt" + i} name="size" type="radio" />);
      output.push(<label className={style.sizeLabel} for={"butt" + i}> {i}</label>);
    }
    return <div className={style.sizeSelectorWrapper}>{output}</div>;
  }
  render() {
    var show = (
      <div className="none">
        <div className={style.titleWrapper}>
          <div className={style.titleLeft}>Select Size</div>
          <div className={style.titleRight}>Size Guide</div>
        </div>

        {/* <input id="skuAndSize__21986789:6" name="skuAndSize"  aria-label="6" disabled="" data-css-9j1bs9="" value="21986789:6"></input>
			<label for="skuAndSize__21986789:6" tabindex="-1" class="" data-css-yyh50b="">6</label> */}
        {this.showSizes()}
      </div>
    );
    return show;
  }
}

export default DisplayRightSizeSection;
