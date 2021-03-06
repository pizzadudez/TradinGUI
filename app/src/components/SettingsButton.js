import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5px;

  label {
    display: flex;
    position: relative;
    font-size: 1em;
    color: #b5b197;
    
    line-height: ${props => (props.size ? props.size : 24)}px;

    input:checked ~ p {
      color: #ffc580;
      transition: color 0.1s ease-in;
    }
  }
`;

const Radio = styled.div`
  cursor: pointer;
  position: absolute;
  left: 0;
  width: ${props => (props.size ? props.size : 24)}px;
  height: ${props => (props.size ? props.size : 24)}px;
  background: #5a5a5a;
  border-radius: ${props => props.type === 'radio' ? 100 : 0}%;
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
    border-radius: ${props => props.type === 'radio' ? 100 : 0}%;
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
    border-radius: ${props => props.type === 'radio' ? 100 : 0}%;
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

const Text = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-left: ${props => (props.size ? props.size + 5 : 29)}px;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  width: 100%;
`;

class SettingsRadioButton extends Component {
  render() {
    return (
      <Wrapper size={this.props.size} >
        <label>
          <Input 
            type={this.props.type}
            onChange={this.props.onChange}
            name={this.props.name || ''}
            value={this.props.value || ''}
            checked={this.props.checked}
            size={this.props.size}
          />
          <Radio 
            type={this.props.type}
            size={this.props.size} 
          />
          <Text size={this.props.size}>{this.props.labelText}</Text>
        </label>
      </Wrapper>
    );
  }
}

export default SettingsRadioButton;