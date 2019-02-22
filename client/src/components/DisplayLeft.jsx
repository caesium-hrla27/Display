import React from "react";
import _ from "underscore";
import styled from "styled-components";
import $ from "jquery";
class DisplayLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickPic = this.clickPic.bind(this);
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

  putPicInPlace(pics, pics_links) {
    //temp hardcode

    var pic_list = [];

    if (Array.isArray(this.props.pictures)) {
      for (let i = 0; i < this.props.pictures.length; i++) {
        // pic_list.push(<div>{pics[i]} and {pics_links[i]}</div>);
        pic_list.push(
          <PicButton onClick={this.clickPic}>
            <ShoePic src={this.props.pichost+this.props.pictures[i]+".jpg" }/>
          </PicButton>
        );
      }
      pics.forEach(item => {});
    }

    return <PicList>{pic_list}</PicList>;
  }

  clickPic() {
    console.log("clicked picture");
    this.setState({ showBig: true });
    console.log(this.state);
  }

  showGallery(e) {

    var pic_list = [
      <ExitButton onClick={() => this.setState({ showBig: false })}>
        X
      </ExitButton>
    ];

   
    if (Array.isArray(this.props.pictures)) {
      for (let i = 0; i < this.props.pictures.length; i++) {
        // pic_list.push(<div>{pics[i]} and {pics_links[i]}</div>);
        pic_list.push(
          <PicSpan>
            {" "}
            <ShoePic src={"/pics/"+this.props.pictures[i]+".jpg"} />
          </PicSpan>
        );
      }
     
    }

    return <Gallery>{pic_list}</Gallery>;
  }

  render() {

    var gallery = this.putPicInPlace(
      this.props.pictures,
      this.props.pic_direction
    );
		var overlay= "";
		
    if (this.state.showBig) {
			$("body").css("overflow", "hidden");
      overlay = this.showGallery(this.props.pictures, this.props.pic_direction);
		} else {
			$("body").css("overflow", "scroll");
		}
		


    var show = (
      <DivLeft>
        {gallery}
        {overlay}
      </DivLeft>
		);
		
    return show;
  }
}
const PicSpan = styled.span`
  display: block;
  padding-right: 8px;
  padding-left: 8px;
  padding-bottom: 8px;
`;
const Gallery = styled.div`
  z-index: 1;
  position: fixed;

  display: block;

  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgb(255, 255, 255);
  overflow: scroll;

  padding-top: 40px;
	padding-bottom: 40px;
	overflow : scroll;
`;

const ExitButton = styled.div`
content: "\E656";

  z-index: 2;
  outline: 0;
  position: fixed;
  top: 0px;
  right: 0px;
  font-weight: 700;
  padding: 40px;

  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  background: 0 0;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  cursor: pointer;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  font-size: 24px;
  line-height: 1;
	font-family: nike-glyphs;
	overflow : hidden;
`;
const ShoePic = styled.img`
	display: block
	width: 100%;
	vertical-align: baseline
	overflow : hidden;
`;
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
  margin-bottom: 12px;
  padding-top: 0;
  padding-left: 8px;
  padding-right: 4px;
  padding-bottom: 0;
  border: none;

  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  box-sizing: border-box;

  outline: 0;
  background: transparent;
  vertical-align: baseline;
	cursor: pointer;
	overflow : hidden;
`;
const PicList = styled.div`
  display: inline-block table;
  box-sizing: inherit;
  margin-top: 44px;
  margin-left: 4px;
  margin-right: -8px;
  padding-left: 44px;
	padding-right: 48px;
	overflow : hidden;
`;
const DivLeft = styled.div`
  position: relative;
  display: inline-block;
  width: calc(100% - 456px);

	overflow : hidden;
`;

export default DisplayLeft;
