import React from "react";

import styled from "styled-components";

const DivLeft = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-self: flex-start;
  flex: 1;
  width: auto;
  background-color: palevioletred;
  min-height: 900px;
`;

class DisplayLeft extends React.Component {
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
    //alert('UnderConstruction')
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
      <DivLeft>
        Left Side [THIS WILL NOT BE SEEN]
        <div>
          <div>PICTURE</div>
          <div>TEMP</div>
        </div>
      </DivLeft>
    );

    return show;
  }
}

export default DisplayLeft;
