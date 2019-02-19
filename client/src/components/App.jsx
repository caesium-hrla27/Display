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

    }
    

    render(){
       
        var show =  
				<div>
					 <Display shoe_id="M1"/>
					  {/* <Carousel/> */}
						</div>

      	return show;
    }
   
}


 export default App;	