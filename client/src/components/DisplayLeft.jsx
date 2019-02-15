import React from "react";
import _ from "underscore";
import styled from "styled-components";


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
		//temp hardcode
		var pics = ["/pics/m0c0o0.jpg","/pics/m0c0o1.jpg","/pics/m0c0o2.jpg",
		"/pics/m0c0o3.jpg","/pics/m0c0o4.jpg","/pics/m0c0o5.jpg"]

		var pic_list = [];
			if (Array.isArray(pics)){
			for(let i = 0; i < pics.length; i++){
				// pic_list.push(<div>{pics[i]} and {pics_links[i]}</div>);
				pic_list.push(<PicButton><ShoePic src= {pics[i]} /> </PicButton>)
			}
			pics.forEach((item)=>{
			})
		}
		return <PicList>{pic_list}</PicList>;
	}
	
  render() {
	
    var show = (
      <DivLeft>
        {/* {this.exposeState()} */}
        {this.putPicInPlace(this.props.pictures,this.props.pic_direction)}
		
      </DivLeft>
    );

    return show;
  }
}
const ShoePic = styled.img`
display: block
width: 100%;
vertical-align: baseline
`
const PicButton = styled.button`


position: relative;
font-size: 14px;
line-height: 1.714285714285714;

-webkit-tap-highlight-color: transparent;
-webkit-appearance: none;

align-items: flex-start;
    text-align: center;
    cursor: default;
    color: buttontext;
min-height: 1px;
width: 50%;
margin: 0em;
margin-bottom:12px;
padding-top: 0;
padding-left:8px;
padding-right:4px;
padding-bottom: 0;
border: none;

overflow: visible;
-webkit-tap-highlight-color: transparent;
-webkit-appearance: none;
box-sizing: border-box;

outline: 0;
background: transparent;
vertical-align: baseline;
cursor:pointer;
		
`
const PicList = styled.div`
display: inline-block table;
box-sizing: inherit;
margin-top: 44px;
margin-left:4px;
margin-right:-8px;
padding-left:44px;
padding-right:48px;
`
const DivLeft = styled.div`
position: relative;
display: inline-block;
width: calc(100% - 456px);
min-height: 1058px;
`;

export default DisplayLeft;
