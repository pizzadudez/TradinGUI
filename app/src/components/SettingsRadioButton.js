import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin: 5px;

  label {
    white-space: nowrap;
    font-size: 1em;
    color: #b5b197;
    margin-left: ${props => (props.size ? props.size + 5 : 29)}px;
    line-height: ${props => (props.size ? props.size : 24)}px;

    input:checked ~ span {
      color: #ffc580;
      transition: color 0.1s ease-in;
    }
  }
`;

const Radio = styled.div`
  cursor: pointer;
  position: absolute;
  width: ${props => (props.size ? props.size : 24)}px;
  height: ${props => (props.size ? props.size : 24)}px;
  background: #5a5a5a;
  border-radius: 100%;
  border: 1px solid #e0dcb2;
  pointer-events: none;
  z-index: 0;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.3);

  &::before {
    content: '';
    position: absolute;
    width: 49%;
    height: 49%;
    background: #dc813f;
    border-radius: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0;
    transform: translate(50%, 50%);
  }

  &::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border: 3px solid #f99c2c;
    border-radius: 100%;
    z-index: 3;
    opacity: 0;
    transform: translate(-1px, -1px);
  }
`;

const Input = styled.input`
  top: 0;
  opacity: 0;
  left: 0;
  z-index: 2;
  position: absolute;
  width: ${props => (props.size ? props.size : 24)}px;
  height: ${props => (props.size ? props.size : 24)}px;
  margin: 0;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Radio} {
      &::before {
        opacity: 1;
        transition: opacity 0.2s ease;
      }
      &::after {
      opacity: 1;
      transition: 0.4s ease-in-out;
      }
    }
  }
`;

class SettingsRadioButton extends Component {
  render() {
    return (
      <Wrapper size={this.props.size} >
        <label>
          <Input 
            type="radio"
            name={this.props.name}
            size={this.props.size}
          />
          <Radio size={this.props.size} />
          {/*<Back size={this.props.size} />
          <Fill size={this.props.size} />*/}
          <span>{this.props.labelText}</span>
        </label>
      </Wrapper>
    );
  }
}

export default SettingsRadioButton;