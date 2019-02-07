import React from "react";
import axios from "axios";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            this_state_prop1: "temp1",
            this_state_prop_another: "temp2",
        }
    }
    

    render(){
        var show = 
        <div className='holder-navbar'>
     	 MALI's NAVBAR
        </div>
        return show;
    }
}

 export default Navbar;	