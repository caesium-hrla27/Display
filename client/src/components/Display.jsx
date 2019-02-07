import React from "react";
import axios from "axios";
import DisplayLeft from "./DisplayLeft";
import DisplayRight from "./DisplayRight";	
import styled from 'styled-components'


class Display extends React.Component {

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
				<div>
       
				BRYANT's DISPLAY [No text will be here] <Button>TEST</Button><br/>
				<BigDiv className='display-big-container'>
				<DisplayLeft/>
				<DisplayRight/>

				</BigDiv>
	
				
        </div>
        return show;
    }
   
}

const BigDiv = styled.div`
	display:flex;
	flex-direction: row;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: blue;
  margin: 0 1em;
  padding: 0.25em 1em;
`

 export default Display;	