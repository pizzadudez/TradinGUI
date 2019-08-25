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

const Back = styled.div`
  cursor: pointer;
  width: ${props => (props.size ? props.size : 24)}px;
  height: ${props => (props.size ? props.size : 24)}px;
  position: absolute;

  &::before {
    content: '';
    border-radius: 100%;
    border: 1px solid #e0dcb2;
    background: #5a5a5a;
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    z-index: 0;
    box-sizing: border-box;
    box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.3);
    top: 0;
  }
`;

const Fill = styled.div`
  display: inline-block;
  background: #dc813f;
  position: absolute;
  width: ${props => (props.size ? props.size * 0.49 : 10)}px;
  height: ${props => (props.size ? props.size * 0.49 : 10)}px;
  border-radius: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  transform: translate(50%, 50%);

  &::before {
    content: '';
    opacity: 0;
    border-radius: 100%;
    width: ${props => (props.size ? props.size * 1.02 : 24)}px;
    height: ${props => (props.size ? props.size * 1.02 : 24)}px;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    border: 3px solid #f99c2c;
    z-index: 3;
    box-sizing: border-box;
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
    & ~ ${Fill} {
      opacity: 1;
      transition: 0.4s ease-in-out;

      &::before {
        opacity: 1;
        transition: opacity 0.2s ease;
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
          <Back size={this.props.size} />
          <Fill size={this.props.size} />
          <span>{this.props.labelText}</span>
        </label>
      </Wrapper>
    );
  }
}

export default SettingsRadioButton;