import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  toggleRealmStats,
  selectStatsRealm,
  selectStatsCurrency, 
} from '../actions/settingsActions'

import styled from 'styled-components';
import StatsTab from './StatsTab';

const Wrapper = styled.div`
  background: #c1beb5;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12), 
    0 1px 5px 0 rgba(0,0,0,0.2);
  overflow: hidden;
  display: grid;
  grid-template-rows: 50px auto;
`;

const ContentWrapper = styled.div`
  z-index: 2;
  position: relative;
  padding: 4px 10px 0 10px;
  box-shadow: 0 -1px 5px 0 rgba(0,0,0,0.14);
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CurrecyPicker = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: grid;
  grid-template-columns: repeat(3, 28px);
  background: magenta;
  height: 28px;
  >div {
    >label {
      color: #524a3a;
      border: 1px solid #9e9c97;
    }
  }
`;

const RealmPicker = styled.select`
  justify-self: start;
  width: 160px;
  height: 32px;
  font-size: 1.5em;
  color: #2d2b26;
  background: #c1beb5;
  border: none;
  margin-bottom: 12px;
  margin-top: 5px;
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
  overflow: hidden;
  & li {
    color: #3a3a3a;
    font-size: 1.3em;
    font-weight: 500;
    padding: 3px 0;
    b {
      color: #524a3a;
      font-weight: 400;
      margin-right: 5px;
    }
  } 
`;

class StatsCard extends Component {
  render() {
    if (this.props.bankers.length < 1  
      || this.props.realms.length < 1) {
      return null;
    }
    // Realm Selector
    const realms = Object.keys(this.props.realms).map(realm => (
      <option value={realm} key={realm}>{realm}</option>
    ));
    // Currency Picker
    const currencies = Object.keys(this.props.currencies).map(
      currencyCode => {
        const currency = this.props.currencies[currencyCode]; 
        return (
          <StatsTab
            text={currency.symbol}
            onChange={() => this.props.selectStatsCurrency(currency.code)}
            value={currency.code}
            name="currencyTabs"
            checked={this.props.currency.code === currency.code ? true : false}
            key={currency.symbol}
          />
        )
      }
    );
    // Stats
    const bankers = this.props.showRealmStats
      ? this.props.bankers.filter(banker => banker.realm === this.props.statsRealm)
      : this.props.bankers
    const banksLeft = bankers.filter(banker => banker.trade_confirmation !== 1).length;
    const banksTraded = bankers.length - banksLeft;
    const gold = bankers.reduce((gold, banker) =>
      banker.trade_confirmation === 1
      ? {
        ...gold, 
        traded: gold.traded += banker.bank_gold,
        tradedValue: gold.tradedValue += banker.bank_gold * 
          this.props.realms[banker.realm].price_per_mil / 1000000
        }
      : {
        ...gold, 
        stock: gold.stock += banker.bank_gold,
        stockValue: gold.stockValue += banker.bank_gold * 
          this.props.realms[banker.realm].price_per_mil / 1000000
        }
      , {traded: 0, tradedValue: 0, stock: 0, stockValue: 0}
    );
    gold.total = gold.traded + gold.stock;
    gold.totalValue = gold.tradedValue + gold.stockValue;
    
    return (
      <Wrapper className={this.props.className}>
        <Tabs>
          <StatsTab 
            text="Summary"
            onChange={() => this.props.toggleRealmStats(false)}
            value={false}
            name="statsTabs"
            checked={!this.props.showRealmStats}
            shadow='left'
          />
          <StatsTab 
            text="Realms"
            onChange={() => this.props.toggleRealmStats(true)}
            value={true}
            name="statsTabs"
            checked={this.props.showRealmStats}
            shadow='right'
          />
        </Tabs>
        <ContentWrapper>
          { !this.props.showRealmStats ? null : (
            <RealmPicker 
              onChange={(e) => this.props.selectStatsRealm(e.target.value)}
              defaultValue={this.props.statsRealm}
            >
              {realms}
            </RealmPicker>
          )}
          <CurrecyPicker>{currencies}</CurrecyPicker>
          <Stats>
            <li><b>Gold traded:</b> {gold.traded.toLocaleString()}</li>
            <li><b>Gold in stock:</b> {gold.stock.toLocaleString()}</li>
            <li><b>Gold in total:</b> {gold.total.toLocaleString()}</li>
            { this.props.showRealmStats ? null : (
              <>
                <li>
                  <b>Traded Value:</b> 
                  {(gold.tradedValue * this.props.currency.exchangeRate)
                    .toLocaleString(undefined, {style: 'currency', currency: this.props.currency.code})}
                </li>
                <li>
                  <b>Stock Value:</b> 
                  {(gold.stockValue * this.props.currency.exchangeRate)
                    .toLocaleString(undefined, {style: 'currency', currency: this.props.currency.code})}
                </li>
              </>
            )}
            <li>
              <b>Total Value:</b> 
              {(gold.totalValue * this.props.currency.exchangeRate)
                .toLocaleString(undefined, {style: 'currency', currency: this.props.currency.code})}
            </li>
            { !this.props.showRealmStats ? null : (
              <li>
                <b>Price per 1k gold:</b>
                {(this.props.realms[this.props.statsRealm].price_per_mil / 1000 
                * this.props.currency.exchangeRate)
                  .toLocaleString(undefined, { 
                    style: 'currency', 
                    currency: this.props.currency.code,
                    maximumSignificantDigits: 4,
                  })
                }
              </li>
            )}
            { this.props.showRealmStats ? null : (
              <li><b>Banks traded:</b> {banksTraded}</li>
            )}
            <li><b>Banks left:</b> {banksLeft}</li>
          </Stats>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  bankers: state.bankers.bankers,
  realms: state.bankers.realms,
  showRealmStats: state.settings.showRealmStats,
  statsRealm: state.settings.statsRealm,
  currencies: state.settings.currencies,
  currency: state.settings.currencies[state.settings.statsCurrency],
});

export default connect(
  mapStateToProps,
  { toggleRealmStats,
    selectStatsRealm,
    selectStatsCurrency, }
)(StatsCard);