import React from "react";
import styled from "styled-components";

class DisplayRightColors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  showColors(id, colors) {
    //todo, image is squashed, bc thumbnail
    var result = [];

    for (let i = 0; i < colors.length; i++) {
      result.push(
        <PictureWrapper>
					
          <ColorThumb
            src={"/pics/"+id+colors[i]+"o0.jpg"}
            title={this.props.text_of_colors[i]}
						style= { { width: "100%", height: "100%" } }
						id= {"C"+i}
						onClick = {this.props.changeCurrentColor}
          />

        </PictureWrapper>
      );
    }
    return result;
	}
	
  render() {
    var show = (
      <ColorsContainer>
        {this.showColors(this.props.shoe_id, this.props.colors)}
      </ColorsContainer>
    );

    return show;
  }
}

const ColorsContainer = styled.div`
  margin-bottom: 34px;
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 8px;
  display: flex;
  flex-flow: row wrap;
`;
const PictureWrapper = styled.div`
  max-width: 69px;
  max-height: 69px;
  min-width: 69px;
  min-height: 69px;
  padding-right: 4px;
  padding-bottom: 4px;
	padding-bottom: 4px;

`;
const ColorThumb = styled.img`
	&:hover {  cursor: pointer; } 
`

export default DisplayRightColors;
//padding 4
