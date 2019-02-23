import React from 'react';
import style from "./modstyle.css";

class DisplayRightTitles extends React.Component {

	constructor(props) {
			super(props);
			this.state = {
			}
	}

	render(){
			var show = 
			<div className={style.topTitleWrapper}>
				<div className={style.topLineOne}>
					<div style={{float: "left"}}> {this.props.category}</div>
					<div style={{float: "right"}}>${this.props.price}</div>
				</div>
				<div className={style.topItemName}>{this.props.name}</div>
			</div>
			return show;
	}
}

export default DisplayRightTitles;	