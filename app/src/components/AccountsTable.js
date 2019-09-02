import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBankers, fetchRealms, selectBanker } from '../actions/bankersActions';

import styled from 'styled-components';
import BankerButton from './BankerButton';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 80px);
  grid-column-gap: 5px;
`;

const AccountColumn = styled.div`
  display: grid;
  align-content: flex-start;
  &::before {
    content: '${props => props.accNum}';
    font-size: 1.2em;
    color: #e0ded6;
    margin-left: 1px;
    margin-bottom: 3px;
  }
`;

class AccountsTable extends Component {
  constructor(props) {
    super(props);
    this.props.fetchBankers();
    this.props.fetchRealms();
  }

  render() {
    if (this.props.bankers.length < 1  
      || this.props.realms.length < 1
      || this.props.disabled) {
      return null;
    } 

    const accountColumns = this.props.accounts.map(accNum => (
      <AccountColumn key={accNum} accNum={accNum}>
        {this.props.bankers.filter(banker => 
          banker.account === accNum 
          && (!banker.trade_confirmation || !this.props.hideTradedBankers
          )).map(banker => (
            <BankerButton 
              key={banker.id} 
              bankerId={banker.id}
              onClick={() => this.props.selectBanker(banker.id)}    
            />
          ))
        }
      </AccountColumn>
    ));

    return (
      <Grid className={this.props.className}>
        {accountColumns}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  bankers: state.bankers.bankers,
  realms: state.bankers.realms,
  accounts: [...new Set(state.bankers.bankers.map(banker => banker.account))],
  hideTradedBankers: state.settings.hideTradedBankers,
});

export default connect(
  mapStateToProps, 
  { fetchBankers, fetchRealms, selectBanker }
)(AccountsTable);