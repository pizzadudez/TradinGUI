import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Text = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  overflow: hidden;
  white-space: nowrap;
`;

const Label = styled.label`
  position: absolute;
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: grid;
  place-content: center;
  background: #adaaa2;
  color: #524a3a;
  font-size: 1.3em;
  font-weight: 500;
  transition: all .25s ease-in-out;
  z-index: 1;
  ${props => props.shadow
    ? props.shadow === 'left'
      ? 'box-shadow: 1px -6px 5px 0 rgba(0,0,0,0.14);'
      : 'box-shadow: -1px -6px 5px 0 rgba(0,0,0,0.14);'
    : 'box-shadow: none;'
  }
`;

const Input = styled.input`
  position: absolute;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
  &:checked {
    & ~ ${Label} {
      background: #c1beb5;
      color: #3a3a3a;
      z-index: 3;
    }
  }
`;

export default function StatsTab(props) {
  return (
    <Wrapper>
      <Input 
        type="radio"
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        checked={props.checked}
        id={props.text}
        
      />
      <Label htmlFor={props.text} shadow={props.shadow || ''}>
        <Text>{props.text}</Text>
      </Label>
    </Wrapper>
  );
}