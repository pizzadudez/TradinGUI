import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleRealmStats } from '../actions/settingsActions'

import styled from 'styled-components';
import StatsTab from './StatsTab';
import RealmStats from './RealmStats';

const Wrapper = styled.div`
  background: #c1beb5;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12), 
    0 1px 5px 0 rgba(0,0,0,0.2);
  overflow: hidden;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.content ? 'blue' : 'red'};
`;

class StatsCard extends Component {
  render() {
    if (this.props.bankers.length < 1  
      || this.props.realms.length < 1) {
      return null;
    }

    return (
      <Wrapper className={this.props.className}>
        <Tabs>
          <StatsTab 
            text="Summary"
            onChange={() => this.props.toggleRealmStats(false)}
            value={false}
            name="statsTabs"
            checked={!this.props.showRealmStats}
          />
          <StatsTab 
            text="Realms"
            onChange={() => this.props.toggleRealmStats(true)}
            value={true}
            name="statsTabs"
            checked={this.props.showRealmStats}
          />
        </Tabs>
        <RealmStats />
      </Wrapper>
      // <Wrapper className={this.props.className}>
      //   <p>Statistics:</p>
        // <ul>
        //   <p><b>Gold Traded:</b> {totalGold.toLocaleString(undefined)}</p>
        //   <p><b>Gold Left:</b> {leftGold.toLocaleString(undefined)}</p>
        //   <p><b>Traded USD value</b> {totalMoney.toLocaleString(undefined)}</p>
        //   <p><b>Traded EUR value</b> {(totalMoney * 0.892).toLocaleString(undefined)}</p>
        //   <p><b>Total USD value</b> {totalUsd.toLocaleString(undefined)}</p>
        // </ul>
      // </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  bankers: state.bankers.bankers,
  realms: state.bankers.realms,
  showRealmStats: state.settings.showRealmStats,
});

export default connect(
  mapStateToProps,
  { toggleRealmStats, }
)(StatsCard);