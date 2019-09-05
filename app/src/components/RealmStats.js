import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectStatsRealm } from '../actions/settingsActions';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: grid;
  grid-template-rows: 40px auto;
  grid-row-gap: 10px;
`;

const Select = styled.select`
  justify-self: start;
  width: 160px;
  height: 32px;
  font-size: 1.5em;
  color: #2d2b26;
  background: #c1beb5;
  border: none;
  border-bottom: 1px solid #524a3a;
  margin-top: 6px;
  cursor: pointer;
  &:focus { outline: none; }
  option {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    &:focus { outline: none; }
  }
`;

const Stats = styled.ul`
  list-style-type: none;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0;
  & li {
    color: #3a3a3a;
    font-size: 1.3em;
    font-weight: 400;
    padding: 1px 0;
    b {
      color: #524a3a;
      font-weight: 500;
      margin-right: 5px;
    }
  } 
  
`;

class RealmStats extends Component {
  render() {
    const options = this.props.realmList.map(realm => (
      <option value={realm}>{realm}</option>
    ));
    const bankers = this.props.bankers.filter(
      banker => banker.realm === this.props.statsRealm
    );
    const banksLeft = bankers.filter(banker => banker.trade_confirmation !== 1).length
    const goldValue = this.props.realms[this.props.statsRealm].price_per_mil / 1000000;
    const gold = bankers.reduce((gold, banker) => 
      banker.trade_confirmation === 1
      ? {...gold, traded: gold.traded += banker.bank_gold}
      : {...gold, left: gold.left += banker.bank_gold}
      , {traded: 0, left: 0}
    );
    gold.total = gold.traded + gold.left;

    return (
      <Wrapper>
        <Select
          onChange={(e) => this.props.selectStatsRealm(e.target.value)}
        >
          {options}
        </Select>
        <Stats>
          <li><b>Gold traded:</b> {gold.traded}</li>
          <li><b>Gold in stock:</b> {gold.left}</li>
          <li><b>Gold in total:</b> {gold.total}</li>
          <li><b>Value Total:</b> {gold.total * goldValue}</li>
          <li><b>Price per gold:</b> {goldValue}</li>
          <li><b>Banks left:</b> {banksLeft}</li>
        </Stats>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  realmList: Object.keys(state.bankers.realms),
  statsRealm: state.settings.statsRealm,
  bankers: state.bankers.bankers,
  realms: state.bankers.realms,
});

export default connect(mapStateToProps, { selectStatsRealm })(RealmStats);
