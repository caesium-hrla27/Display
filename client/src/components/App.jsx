import React from "react";
import axios from "axios";
import Carousel from './Carousel.jsx';
import Display from './Display.jsx';

import Navbar from './Navbar.jsx';

class App extends React.Component {

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
       
        var show =  <div><Navbar/><br/> <Display shoe_id="M1"/> <Carousel/></div>

      	return show;
    }
   
}

 export default App;	