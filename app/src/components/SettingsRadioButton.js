import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  margin: 2px;
  cursor: pointer;
  width: ${props => (props.size ? props.size : 24)}px;
  height: ${props => (props.size ? props.size : 24)}px;
  position: relative;

  label {
    white-space: nowrap;
    font-size: 1em;
    color: #92734e;
    margin-left: ${props => (props.size ? props.size + 5 : 29)}px;
    line-height: ${props => (props.size ? props.size : 24)}px;

    input:checked ~ span {
      color: #f99c2c;
    }
  }

  &::before {
    content: '';
    border-radius: 100%;
    border: 1px solid grey;
    background: lightgrey;
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
  background: #dc813f;
  position: absolute;
  width: calc(100% - 51%);
  height: calc(100% - 51%);
  border-radius: 100%;
  top: 50%;
  left: 50%;
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  transform: translate(-50%, -50%);

  &::before {
    content: '';
    opacity: 0;
    border-radius: 100%;
    width: ${props => (props.size ? props.size * 1.01 : 24)}px;
    height: ${props => (props.size ? props.size * 1.01 : 24)}px;
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
  width: 100%;
  height: 100%;
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
      <Wrapper size={this.props.size}>
        <label>
          <Input 
            type="radio"
            name={this.props.name}
          />
          <Fill size={this.props.size} />
          <span>{this.props.labelText}</span>
        </label>
      </Wrapper>
    );
  }
}

export default SettingsRadioButton;