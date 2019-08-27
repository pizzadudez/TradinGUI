import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 350px;
  border-radius: 4px;
  background: grey;
  overflow: hidden;
  min-height: 50px;
`;

const Header = styled.label`
  height: 50px;
  width: 350px;
  display: grid;
  place-items: center;
  cursor: pointer;
  background: midnightblue;
  color: white;
`;

const Content = styled.div`
  width: 100%;
  max-height: 0;
  overflow: hidden;
  background: white;
  transition: max-height 1s linear;
  color: black;
  display: block;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked {
    & ~ ${Header} {
      background: tomato;
    }
    & ~ ${Content} {
      max-height: 100vh;
    }
  }
`;

export default function Collapsible(props) {
  return(
    <Wrapper>
      <Input id="" type="checkbox" />
      <Header htmlFor=""></Header>
      <Content></Content>
    </Wrapper>
  );
}