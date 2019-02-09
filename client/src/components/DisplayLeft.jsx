import React from "react";
import _ from "underscore";
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
    this.state = {};
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
    temp.push(<div>EXPOSING STATE</div>);
    for (let key in this.state) {
      temp.push(
        <div className="expose" key={key}>
          {" "}
          {key} : {this.state[key]}
        </div>
      );
    }
    return temp;
  }
  
  // componentDidUpdate() {
  //   console.log("update");
  //   var obj = {
  //     pictures: this.props.picture,
  //     pic_direction: this.props.pic_direction
  //   };

  //   if (!_.isEqual(this.state, obj)) {
  //     this.setState(obj);
  //   }
  // }
	putPicInPlace(pics,pics_links){
		var result = [];
			if (Array.isArray(pics)){
			for(let i = 0; i < pics.length; i++){
				result.push(<div>{pics[i]} and {pics_links[i]}</div>);
			}
			pics.forEach((item)=>{
			})
		}
		return result;
	}

  render() {
    var show = (
      <DivLeft>
        {this.exposeState()}
        {this.putPicInPlace(this.props.pictures,this.props.pic_direction)}
        <div />
      </DivLeft>
    );

    return show;
  }
}

export default DisplayLeft;
