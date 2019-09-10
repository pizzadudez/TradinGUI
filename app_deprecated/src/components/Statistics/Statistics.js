import React, { Component } from 'react';
import { connect } from 'react-redux';


class Statistics extends Component {
  render() {
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
      <div>
        <h2>Total gold traded: {totalGold.toLocaleString(undefined)}</h2>
        <h2>Gold left to trade: {leftGold.toLocaleString(undefined)}</h2>
        <h2>Total $ owed: {totalMoney.toLocaleString(undefined)}</h2>
        <h2>Euro sum: {(totalMoney * 0.892).toLocaleString(undefined)}</h2>
        <h2>Expected usd: {totalUsd.toLocaleString(undefined)}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bankers: state.bankers.bankers,
  realms: state.bankers.realms,
});

export default connect(mapStateToProps)(Statistics);