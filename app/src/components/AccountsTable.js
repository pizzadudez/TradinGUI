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
  text-align: center;
`;

const ColumnHeader = styled.div`
  font-size: 17px;
  color: white;
  margin-bottom: 3px;
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
      <AccountColumn key={accNum}>
        <ColumnHeader>{accNum}</ColumnHeader>
        {this.props.bankers.filter(banker => banker.account === accNum)
          .map(banker => {
            if (!banker.trade_confirmation || this.props.showTraded) {
              return (
                <BankerButton 
                  key={banker.id} 
                  bankerId={banker.id}
                  onClick={() => this.props.selectBanker(banker.id)}    
                />
              );
            }
          })
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
  showTraded: state.settings.showTraded,
});

export default connect(
  mapStateToProps, 
  { fetchBankers, fetchRealms, selectBanker }
)(AccountsTable);