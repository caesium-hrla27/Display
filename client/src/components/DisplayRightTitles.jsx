import React from 'react';
import styled from 'styled-components';

const LineOne = styled.div`

color: red;
`
const Price = styled.div`
float: right;
`
const Category = styled.div`
float:left;
color: green;
`
const ItemName = styled.div`
clear: both;
`

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
			<div className='display-right-cartbar' >

				<LineOne>
					<Category> {this.props.category}</Category>
					<Price >" "+${this.props.price}</Price>
				</LineOne>
				<ItemName>{this.props.name}</ItemName>
			</div>
			return show;
	}
 
}

export default DisplayRightTitles;	