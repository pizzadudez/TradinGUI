import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(50px, min-content));
  grid-row-gap: 8px;
`;

const Collapsible = styled.div`
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


class TradeList extends Component {
  render() {
    if (this.props.tradedBankers.length < 1) {
      return null;
    }

    const tradeSessionChunks = this.props.tradedBankers.reduce((arr, banker) => {
      let lastSession = arr[arr.length-1];
      let lastBanker = lastSession[lastSession.length-1] || banker;
      (banker.trade_timestamp - lastBanker.trade_timestamp)/1000 < 8 * 3600
      ? lastSession.push(banker)
      : arr[arr.length] = [banker];
      return arr;
    }, [[]]);

    return (
      <Wrapper className={this.props.className}>
        <Collapsible>
          <Input id="123" type="checkbox" />
          <Header htmlFor="123">
            Text Here.
          </Header>
          <Content>
            <p>Dolor sir dolores.</p>
            <p>Dolor sir dolores.</p>
            <p>Dolor sir dolores.</p>
            <p>Dolor sir dolores.</p>
            <p>Dolor sir dolores.</p>
          </Content>
        </Collapsible>
        <Collapsible>
          <Input id="1234" type="checkbox" />
          <Header htmlFor="1234">
            Text Here.
          </Header>
          <Content>
            <p>Dolor sir dolores.</p>
          </Content>
        </Collapsible>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  tradedBankers: state.bankers.bankers.filter(banker =>
    banker.trade_timestamp !== null
    ).sort((a, b) => a.trade_timestamp - b.trade_timestamp),
});

export default connect(mapStateToProps)(TradeList);