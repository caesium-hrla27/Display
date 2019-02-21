import React from "react";
import styled from "styled-components";
import Title from "./DisplayRightTitles.jsx";
import Colors from "./DisplayRightColors.jsx";
import Sizes from "./DisplayRightSizeSections.jsx";
import CartBar from "./DisplayRightCartBar.jsx";
import Descriptions from "./DisplayRightDescription.jsx";
import Reviews from "./DisplayRightReviews.jsx";

class DisplayRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  exposeState() {
    var temp = [];
    for (let key in this.props) {
      temp.push(
        <div className="expose" key={key}>
          {" "}
          {key} : {this.props[key]}
        </div>
      );
    }
    return temp;
  }

  render() {
    var show = (
      <DivRight>
				<RightRail>
					<Title name = {this.props.item_name} category={this.props.category} price={this.props.price}/>
					<Colors colors = {this.props.colors} text_of_colors = {this.props.text_of_colors} changeCurrentColor = {this.props.changeCurrentColor}/>
					<Sizes sizes = {this.props.sizes}/>
       	  <CartBar/>
					{/* todo get the right color index. */}
        	<Descriptions front = {this.props.front_paragraph}  text_of_colors = {this.props.text_of_colors}  product_SKU= {this.props.shoe_id+this.props.current_color}current_color = {this.props.current_color} complete = {this.props.complete_description}/>
					<Reviews />
				</RightRail>
      </DivRight>
    );
    return show;
  }
}
const DivRight = styled.div`
  position: -webkit-sticky;
  position: sticky;
  bottom: 30px;
  
  max-width: 456px;
  min-width: 456px;
	background-color: white;
	margin-top: 44px;
`;

const RightRail = styled.div`
padding-right: 48px;
padding-left: 24px;
padding-top: 4px;
margin-right: 7px;
`


export default DisplayRight;
