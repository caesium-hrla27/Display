import React from 'react';
import styled from 'styled-components';


class DisplayRightTitles extends React.Component {

	constructor(props) {
			super(props);
			this.state = {
					this_state_prop1: "temp1",
					this_state_prop_another: "temp2",
			}
			this.getUserName= this.getUserName.bind(this);
	}
	
	getUserName(e) {
		 this.state.username = e.target.value;
		 this.setState(this.state);
	}

	handleSubmit(e){
			e.preventDefault();
			//alert('UnderConstruction')
			axios
			.post('api', this.state)
			.then(()=>{})
			.catch((err)=>{ console.log(err);})
	}

	exposeState(){
			var temp = [];
			for(let key in this.state){
							temp.push(<div className = 'expose'> {key} : {this.state[key]}</div>)
					}
					return temp;
			}

	
	render(){
			var show = 
			<TitleContainer>
				<LineOne>
					<Category> {this.props.category}</Category>
					<Price >${this.props.price}</Price>
				</LineOne>
				<ItemName>{this.props.name}</ItemName>
			</TitleContainer>
			return show;
	}
 
}
const TitleContainer = styled.div`
padding-bottom: 32px;
margin-bottom: 32px;
`
const LineOne = styled.div`
font-size: 16px;
line-height: 1.5;
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
`
const Price = styled.div`
float: right;
`
const Category = styled.div`
float:left;

`
const ItemName = styled.div`
clear: both;
font-weight: 500;
line-height: 1.2;
letter-spacing: 0.007em;
font-size: 28px;
display: block;
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
`


export default DisplayRightTitles;	