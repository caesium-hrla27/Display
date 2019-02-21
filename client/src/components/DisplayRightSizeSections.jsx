import React from "react";
import styled from "styled-components";

class DisplayRightSizeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      this_state_prop1: "temp1",
      this_state_prop_another: "temp2"
    };
    this.getUserName = this.getUserName.bind(this);
  }

  getUserName(e) {
    this.state.username = e.target.value;
    this.setState(this.state);
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

  showSizes(sizes) {
    var output = [];
    for (let i = 6.5; i <= 15; i += 0.5) {
      output.push(<SizeInput id={"butt" + i} name="size" type="radio" />);
      output.push(<SizeLabel for={"butt" + i}> {i}</SizeLabel>);
    }
    return <SizeSelectorContainer>{output}</SizeSelectorContainer>;
  }
  render() {
    var show = (
      <div className="display-right-cartbar">
        <SizeTitleContainer>
          <SizeTitleLeft>Select Size</SizeTitleLeft>
          <SizeTitleRight>Size Guide</SizeTitleRight>
        </SizeTitleContainer>

        {/* <input id="skuAndSize__21986789:6" name="skuAndSize"  aria-label="6" disabled="" data-css-9j1bs9="" value="21986789:6"></input>
			<label for="skuAndSize__21986789:6" tabindex="-1" class="" data-css-yyh50b="">6</label> */}
        {this.showSizes()}
      </div>
    );
    return show;
  }
}
const SizeInput = styled.input`
	
-webkit-transition: all 0.2s ease;
-o-transition: all 0.2s ease;
transition: all 0.2s ease;

  border-radius: 2px;
  position: absolute;
  appearance: none;
  width: 0;
  opacity: 0.001;
  border: 0;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 14px;
      border-radius: 2px;
      box-sizing: border-box;
      text-rendering: auto;
      letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
      text-align: start;
      font: 400 11px system-ui;

  &:checked + label {
    background-color: #111;
    color: #fff;
  }
`;
const SizeLabel = styled.label`
	
// -webkit-transition: all 0.1s ease;
// -o-transition: all 0.1s ease;
// transition: all 0.1s ease;

min-width: calc((100% - ((5 - 1) * 7px)) / 5);
max-width: calc((100% - ((5 - 1) * 7px)) / 5);
min-width: initial;
max-width: initial;

display: inline-flex;
box-sizing: border-box;

width: 100%;

-webkit-font-smoothing: antialiased;

vertical-align: baseline;

cursor: pointer;
color: #111;
background-color: #f7f7f7;

height: 48px;
display: -webkit-inline-box;
display: -moz-inline-box;
display: -ms-inline-flexbox;
display: -webkit-inline-flex;
display: inline-flex;
align-items: center;
justify-content: center;

border:0px;
border-radius: 4px;
font: inherit;

box-shadow: 0px 0px 0px 1px #e5e5e5;
 &: hover{
	box-shadow: 0px 0px 1px 1px black;
 }


-webkit-box-align: center;
-webkit-align-items: center;
-webkit-box-pack: center;
-webkit-justify-content: center;order-box;

margin-right: 0;
margin-bottom: 0;

font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		
`;

const SizeTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
const SizeTitleLeft = styled.div`
float:left;
line-height: 1.125;
text-align: left;
background: white;
=
`;

const SizeTitleRight = styled.div`
  float: right;
  line-height: 1.125;
  text-align: right;
  background: white;
  color: #6d6d6d;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
const SizeSelectorContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 12px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;
  padding: 1px;
  font-size: 16px;
  line-height: 1.5;
  border: 0;
  font: inherit;
  vertical-align: baseline;
`;
//maybe not a div?
const SizeButtons = styled.div``;
export default DisplayRightSizeSection;
