import React from "react";

import $ from "jquery";
import style from './modstyle.css'

class DisplayLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickPic = this.clickPic.bind(this);
  }

  putPicInPlace(pics) {

    var result = [];
    if (Array.isArray(this.props.pictures)) {
      for (let i = 0; i < this.props.pictures.length; i++) {
        result.push(
          <button className={style.picButton} onClick={this.clickPic}>
            <img className={style.shoePic} src={this.props.pichost + this.props.pictures[i]+".jpg" }/>
          </button>
        );
      }
    }
    return <div className={style.picList}>{result}</div>;
	}
	
  clickPic() {
    console.log("clicked picture");
    this.setState({ showBig: true });
    console.log(this.state);
  }

  showGallery(e) {

    var pic_list = [
      <div className={style.exitButton} onClick={() => this.setState({ showBig: false })}>
        X
      </div>
    ];

   
    if (Array.isArray(this.props.pictures)) {
      for (let i = 0; i < this.props.pictures.length; i++) {
        // pic_list.push(<div>{pics[i]} and {pics_links[i]}</div>);
        pic_list.push(
          <span className={style.picSpan}>
            {" "}
            <img className={style.shoePic} src={this.props.pichost+this.props.pictures[i]+".jpg"} />
          </span>
        );
      }
     
    }
		// return <Gallery>{pic_list}</Gallery>;
		return <div className={style.galleryOverlay}>{pic_list}</div>;
  }

  render() {

    var gallery = this.putPicInPlace(
      this.props.pictures,
      this.props.pic_direction
    );
		var overlay= "";
		
    if (this.state.showBig) {
			$("body").css("overflow", "hidden");
      overlay = this.showGallery(this.props.pictures, this.props.pic_direction);
		} else {
			$("body").css("overflow", "scroll");
		}
		


    var show = (
      <div className={style.divLeft}>
        {gallery}
        {overlay}
      </div>
		);
		
    return show;
  }
}







// const GalleryPopUp = styled.div`
//   z-index: 1;
//   position: fixed;

//   display: block;

//   top: 0px;
//   bottom: 0px;
//   left: 0px;
//   right: 0px;
//   background-color: rgb(255, 255, 255);
//   overflow: scroll;

//   padding-top: 40px;
// 	padding-bottom: 40px;
// 	overflow : scroll;
// `;

export default DisplayLeft;
