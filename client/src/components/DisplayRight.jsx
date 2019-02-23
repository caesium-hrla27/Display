import React from "react";
import Title from "./DisplayRightTitles.jsx";
import Colors from "./DisplayRightColors.jsx";
import Sizes from "./DisplayRightSizeSections.jsx";
import CartBar from "./DisplayRightCartBar.jsx";
import Descriptions from "./DisplayRightDescription.jsx";
import Reviews from "./DisplayRightReviews.jsx";
import style from './modstyle.css'
class DisplayRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }



  render() {
    var show = (
      <div className = {style.rightDiv}>
				<div className = {style.rightRail}>
					<Title name = {this.props.item_name} category={this.props.category} price={this.props.price}/>
					<Colors pichost= {this.props.pichost} shoe_id = {this.props.shoe_id} colors = {this.props.colors} text_of_colors = {this.props.text_of_colors} changeCurrentColor = {this.props.changeCurrentColor}/>
					<Sizes sizes = {this.props.sizes}/>
       	  <CartBar/>
					{/* todo get the right color index. */}
        	<Descriptions front = {this.props.front_paragraph}  text_of_colors = {this.props.text_of_colors}  product_SKU= {this.props.shoe_id+this.props.current_color}current_color = {this.props.current_color} complete = {this.props.complete_description}/>
					<Reviews />
				</div>
      </div>
    );
    return show;
  }
}




export default DisplayRight;
