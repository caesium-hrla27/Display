import React from "react";
import axios from "axios";
import Title from "./DisplayRightTitles.jsx";
import Colors from "./DisplayRightColors.jsx";
import Sizes from "./DisplayRightSizeSections.jsx";
import CartBar from "./DisplayRightCartBar.jsx";
import Descriptions from "./DisplayRightDescription.jsx";
import Reviews from "./DisplayRightReviews.jsx";

import styled from "styled-components";

const DivRight = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-self: flex-start;
  max-width: 456px;
  min-width: 456px;
  min-height: 500px;
  background-color: peru;
`;

class DisplayRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      this_state_prop1: "temp1",
			this_state_prop_another: "temp2",
			stuff : props.stuff
    };
    this.getUserName = this.getUserName.bind(this);
  }

  getUserName(e) {
    this.state.username = e.target.value;
    this.setState(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("api", this.state)
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
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
        Right Side [This will not be seen]
				{this.exposeState(this.props)}
        <Title name = {this.props.item_name} category={this.props.category} price={this.props.price}/>
        <Colors colors = {this.props.colors} text_of_colors = {this.props.text_of_colors}/>
        <Sizes sizes = {this.props.sizes}/>
        <CartBar />
        <Descriptions front = {this.props.front_paragraph} complete = {this.props.complete_description}/>
        <Reviews />
      </DivRight>
    );
    return show;
  }
}

export default DisplayRight;
