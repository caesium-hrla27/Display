import React from "react";
import styled from "styled-components";

class DisplayRightDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      front2:
        "Boasting the first-ever Max Air unit created specifically for Nike Sportswear, the Nike Air Max 270 SE Reflective Men's Shoe delivers visible Air under every step. Updated for modern comfort, it nods to the original 1991 Air Max 180 with its tongue design, which features an exaggerated top and a heritage logo."
    };
  }

  exposeState() {
    var temp = [];
    for (let key in this.state) {
      temp.push(
        <div className="expose">
          {" "}
          {key} : {this.state[key]}
        </div>
      );
    }
    return temp;
  }

  render() {

    var show = (
      <DivDescriptionContainer>
{/* TODO HERE */}
        <DivText><p>{this.state.front2}</p></DivText>

        <DivColorSku>
          <ul>
            <li>Shown: {this.props.text_of_colors[0]} </li>
            <li >Style: {this.props.product_SKU}</li>
          </ul>
        </DivColorSku>

        <DivReadMore><span>Read More</span></DivReadMore>

      </DivDescriptionContainer>
    );
    return show;
  }
}

const DivDescriptionContainer = styled.div`
  display: block;
  padding-top: 16px;
  padding-right: 0;
	padding-left: 0;
	font-size:16;
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
`;

const DivText = styled.div`
  box-sizing: border-box;
  display: block;
  font-size: 16px;
	line-height: 1.5;
	& p {
		line-height: 1.75;
		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
	}
`;

const DivColorSku = styled.div`



& ul {
margin: 0;
padding: 0;
border: 0;
padding-top: 32px;
padding-bottom: 24px;
list-style: none;

display: block;

margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 40px;

	}
	
	& li {
		list-style-type: disc;
		margin-left: 16px;
		margin-bottom: 4px;
	}

`;
const DivReadMore = styled.button`
border-radius: 0px;
border: none;
background:none!important;
box-shadow: inset 0 -1px 0 0 #222;
background: #fff;
color: #111;
padding:0!important;


		line-height: 1.5;

    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    text-align: center;
    text-decoration: none;

padding: 1px 7px 2px;
align-items: flex-start;
text-rendering: auto;

letter-spacing: normal;
word-spacing: normal;
text-transform: none;
text-indent: 0px;
text-shadow: none;

margin: 0em;
font: 500 16px system-ui;

& span{
	color: black;
}
`;
// reminder Review unit need to have top padding

export default DisplayRightDescription;
