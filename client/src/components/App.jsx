import React from "react";
import Display from './Display.jsx';
import style from './modstyle.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    

    render(){
       {var rand = Math.round(Math.random())}
        var show =  
				<div>
					 <Display shoe_id={"M"+rand}/>
					  {/* <Carousel/> */}
						</div>

      	return show;
    }
   
}


 export default App;	