import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  background: grey;
  overflow: hidden;
  min-height: 30px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12), 
    0 1px 5px 0 rgba(0,0,0,0.2);
`;

const Header = styled.label`
  height: 36px;
  width: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  background: #4e4c47;
  color: #b5b197;
  font-size: 1.2em;
  font-weight: 500;
  transition: all .2s ease-in-out;
  overflow: hidden;
  position: relative;
  &:hover {
    background: #696660;
    color: #d6cc8f;
  }
  &::before {
    font-family: 'Material Icons';
    content: 'keyboard_arrow_down';
    position: absolute;
    right: 8px;
    transition: transform .3s ease-in-out;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-height: 0;
  overflow: hidden;
  background: #c1beb5;
  transition: max-height .3s ease-in;
  color: black;
  display: block;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked {
    & ~ ${Header} {
      background: #b36b38;
      color: #ffedd0;
      border-bottom: 1px solid #7d7d7d;
      &::before {
        transform: rotate(90deg);
      }
    }
    & ~ ${ContentContainer} {
      max-height: 50vh;
    }
  }
`;

export default function Collapsible(props) {
  return(
    <Wrapper>
      <Input id={props.header} type="checkbox" />
      <Header htmlFor={props.header}>{props.header}</Header>
      <ContentContainer>{props.content}</ContentContainer>
    </Wrapper>
  );
}