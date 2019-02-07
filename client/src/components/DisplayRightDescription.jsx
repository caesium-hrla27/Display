import React from 'react';
class DisplayRightDescription extends React.Component {

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
				DisplayRightDescription
			</div>
			return show;
	}
 
}

export default DisplayRightDescription;	