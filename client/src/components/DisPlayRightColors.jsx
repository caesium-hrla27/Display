import React from 'react';
import styled from "styled-components";

class DisplayRightColors extends React.Component {

	constructor(props) {
			super(props);
			this.state = {
					this_state_prop1: "temp1",
					this_state_prop_another: "temp2",
			}

	}
	

	exposeState(){
			var temp = [];
			for(let key in this.state){
							temp.push(<div className = 'expose'> {key} : {this.state[key]}</div>)
					}
					return temp;
			}

	showColors(colors){
		//todo, image is squashed, bc thumbnail
		var t = [];
		var tumb = ["/pics/m0c0o0.jpg","/pics/m0c1o0.jpg","/pics/m0c0o0.jpg","/pics/m0c1o0.jpg","/pics/m0c0o0.jpg","/pics/m0c1o0.jpg","/pics/m0c0o0.jpg","/pics/m0c1o0.jpg","/pics/m0c0o0.jpg","/pics/m0c1o0.jpg","/pics/m0c0o0.jpg","/pics/m0c1o0.jpg"]
		colors = tumb;
		var hover = ["Color 1", "Color 2"]

		tumb.forEach((i)=>t.push(<PictureWrapper> <img src={i} style={{width:"100%", height:"100%"}}></img> </PictureWrapper>));
		return t;
	}
	render(){
			var show = 
			<ColorsContainer >
				{this.showColors(this.props.colors)}
			</ColorsContainer>
			
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
`
const PictureWrapper = styled.div`
max-width:69px;
max-height:69px;
min-width:69px;
min-height:69px;
padding-right:4px;
padding-bottom:4px;
padding-bottom:4px;
`
export default DisplayRightColors;	
//padding 4