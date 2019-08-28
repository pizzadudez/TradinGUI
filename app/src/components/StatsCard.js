import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const Wrapper = styled.div`
  background: #c1beb5;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12), 
    0 1px 5px 0 rgba(0,0,0,0.2);
  & p {
    color: #4e4c47;
    font-size: 2em;
    margin-block-start: 8px;
    margin-block-end: 8px;
    margin-left: 20px;
  }
  & ul {
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    font-size: 1.5em;
    & p {
      font-weight: 500;
      font-size: 20px;
      color: black;
      margin: 3px;
      padding: 6px 0;
    }
    & p b {
      color: #928e84;
    }
  }
`;

class StatsCard extends Component {
  render() {
    if (this.props.bankers.length < 1  
      || this.props.realms.length < 1) {
      return null;
    } 

    const totalGold = this.props.bankers.reduce(
      (total, banker) => 
      total + (banker.trade_confirmation 
        ? Math.round(banker.bank_gold/1000) * 1000 
        : 0),
      0
    );

    const totalMoney = this.props.bankers.reduce(
      (total, banker) => 
      total + (banker.trade_confirmation 
        ? Math.round(banker.bank_gold/1000)
          * this.props.realms[banker.realm].price_per_mil
          / 1000
        : 0),
      0
    );

    const leftGold = this.props.bankers.reduce(
      (total, banker) =>
      total + (banker.trade_confirmation
        ? 0
        : Math.round(banker.bank_gold/1000) * 1000),
      0
    );

    const totalUsd = this.props.bankers.reduce(
      (total, banker) => 
      total + Math.round(banker.bank_gold / 1000)
        * this.props.realms[banker.realm].price_per_mil / 1000, 
      0
    );

    return (
      <Wrapper className={this.props.className}>
        <p>Statistics:</p>
        <ul>
          <p><b>Gold Traded:</b> {totalGold.toLocaleString(undefined)}</p>
          <p><b>Gold Left:</b> {leftGold.toLocaleString(undefined)}</p>
          <p><b>Traded USD value</b> {totalMoney.toLocaleString(undefined)}</p>
          <p><b>Traded EUR value</b> {(totalMoney * 0.892).toLocaleString(undefined)}</p>
          <p><b>Total USD value</b> {totalUsd.toLocaleString(undefined)}</p>
        </ul>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  bankers: state.bankers.bankers,
  realms: state.bankers.realms,
});

export default connect(mapStateToProps)(StatsCard);