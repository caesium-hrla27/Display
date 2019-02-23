import React from "react";
import axios from "axios";
import DisplayLeft from "./DisplayLeft";
import DisplayRight from "./DisplayRight";
import querystring from "querystring";
import style from './modstyle.css'

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoe_id: props.shoe_id || "M1",
      this_color: "C0",
      colors: [],
      text_of_colors: [],
      current_color: "C0",
      pictures: "FAILED TO FETCH",
      pic_direction: "FAILED TO FETCH",
      category: "FAILED TO FETCH",
      complete_description: "FAILED TO FETCH",
      front_paragraph: "FAILED TO FETCH",
      item_name: "FAILED TO FETCH",
			price: "FAILED TO FETCH",
			pichost: "https://s3-us-west-1.amazonaws.com/fec-display-module/"
    };
    this.changeCurrentColor = this.changeCurrentColor.bind(this);
	}
	
  changeCurrentColor(e) {
		this.setState({ current_color: e.target.id });
		this.getNewPictures(e.target.id); // skipping to only fetch images
  }

	getNewPictures(color) {
		var qs1 = querystring.stringify({ shoe_id: this.state.shoe_id });
		var qs2 = querystring.stringify({ color_id: color });

		axios
      .get("/api/getpictures?" + qs1 + "&" + qs2)
      .then(res => {
        var pictures = [];
        var pic_direction = [];
        res.data.forEach(({ orientation, image_link }) => {
          pic_direction.push(orientation);
          pictures.push(image_link);
        });
        this.setState({ pictures, pic_direction });
      })
      .catch(err => {
        console.log(err);
			});
			this.pictures
	}
	
  componentDidMount() {
		this.fetchData();
	}

	fetchData(){
		console.log('fetching data');
		var qs1 = querystring.stringify({ shoe_id: this.state.shoe_id });
    var qs2 = querystring.stringify({ color_id: this.state.this_color });
		
    axios
      .get("/api/getinfo?" + qs1)
      .then(res => {
        console.log(res);

        var obj = {
          category: res.data.category,
          complete_description: res.data.complete_description,
          front_paragraph: res.data.front_paragraph,
          sizes: res.data.sizes,
          item_name: res.data.item_name,
          price: res.data.price
        };
        this.setState(obj);
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("/api/getcolors?" + qs1)
      .then(res => {
        var colors = [];
        var text_of_colors = [];

        res.data.forEach(({ color_id, text_of_color }) => {
          colors.push(color_id);
          text_of_colors.push(text_of_color);
				});
        this.setState({ colors, text_of_colors });
      })
      .catch(err => {
        console.log("err2", err);
      });

    axios
      .get("/api/getpictures?" + qs1 + "&" + qs2)
      .then(res => {
        var pictures = [];
        var pic_direction = [];
        res.data.forEach(({ orientation, image_link }) => {
          pic_direction.push(orientation);
          pictures.push(image_link);
        });
        this.setState({ pictures, pic_direction });
      })
      .catch(err => {
        console.log(err);
			});
			
	}
  handleSubmit(e) {
    e.preventDefault();
    //alert('UnderConstruction')
    axios
      .post("api", this.state)
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  }

  exposeState() {
    var temp = [];
    temp.push(<div>EXPOSING STATE</div>);
    for (let key in this.state) {
      if (typeof this.state[key] !== Array) {
        temp.push(
          <div className="expose" key={key}>
            {" "}
            {key} : {this.state[key]}
          </div>
        );
      }
    }
    return temp;
  }

  render() {
    var show = (
      <div className={style.big_container}>
        <DisplayLeft
          pictures={this.state.pictures}
          pic_direction={this.state.pic_direction}
					current_color={this.state.current_color}
					pichost = {this.state.pichost}
        />

        <DisplayRight
          shoe_id={this.state.shoe_id}
          item_name={this.state.item_name}
          price={this.state.price}
          this_color={this.state.this_color}
          sizes={this.state.sizes}
          colors={this.state.colors}
          text_of_colors={this.state.text_of_colors}
          text_of_SKU={this.state.text_of_SKU}
          category={this.state.category}
          front_paragraph={this.state.front_paragraph}
          complete_description={this.state.complete_description}
					current_color={this.state.current_color}
					changeCurrentColor = {this.changeCurrentColor}
					pichost = {this.state.pichost}
        />
      </div>
    );

    return show;
  }
}





export default Display;
