import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  width: max-content;
  border: none;
  border-radius: 3px;
  padding: 1px 8px;
  overflow: hidden;
  cursor: pointer;
  white-space: nowrap;
  transition: .25s ease-in-out;
  box-shadow: 
    0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12),
    0 1px 5px 0 rgba(0,0,0,0.2);
  font-size: 16px;
  font-weight: 550;
  height: 40px;
  background: #ffba66;
  color: #5d4500;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #e49736;
    color: #000000;
  }
  &:active{
    background: #f78900;
    transition: .15s ease-in-out;
    transform: translateY(0.4px) translateX(0.4px);
  }
  &:disabled {
    background: #525252;
    color: #827f6b;
    cursor: default;
    box-shadow: none;
    pointer-events: none;
  }
`;

export default function (props) {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </Button>
  );
}