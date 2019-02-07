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
      this_state_prop_another: "temp2"
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
    for (let key in this.state) {
      temp.push(
        <div className="expose">
          {" "}
          {key} : {this.state[key]}
        </div>
      );
    }
    return temp;
  }

  render() {
    var show = (
      <DivRight>
        Right Side [This will not be seen]
        <Title />
        <Colors />
        <Sizes />
        <CartBar />
        <Descriptions />
        <Reviews />
      </DivRight>
    );
    return show;
  }
}

export default DisplayRight;
