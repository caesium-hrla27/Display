import React from "react";
import styled from "styled-components";

class DisplayRightCartBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var show = (
      <CartBarContainer>
        <LeftCart>Add To Cart</LeftCart>
        <RightCart> {"<3"}</RightCart>
      </CartBarContainer>
    );
    return show;
	}
	
}
const CartBarContainer = styled.div`
  display: flex;
  padding-right: 0;
  padding-left: 0;
  margin-top: 40px;
  margin-bottom: 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: baseline;
`;
const LeftCart = styled.button`
  flex: 1 0 auto;
  text-rendering: auto;

  margin-right: 1px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 20px;
  padding-left: 20px;
  font-weight: 500;
  background: black;
  color: white;

  letter-spacing: normal;
  word-spacing: normal;

  text-align: center;

  vertical-align: top;
  white-space: nowrap;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  cursor: pointer;

  text-rendering: auto;

  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;

  margin: 0em;
  font: 500 16px system-ui;
  line-height: 1.5;
	display: inline-block;

	  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;

  &:hover {
    background: #4E4E4E;
  }
`;
const RightCart = styled.button`

position: relative;
flex-basis: 75px;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #fff;
  */background: #111;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  border-radius: 2px;
	cursor: pointer;
	
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;

	background: black;
	
	margin: 0em;
  font: 500 16px system-ui;
  line-height: 1.5;
	display: inline-block;
	
  &:hover {
		background: #4E4E4E;
		font: 500 18px system-ui;
  }
`;
export default DisplayRightCartBar;
