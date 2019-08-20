import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBankers, fetchRealms, selectBanker } from '../actions/bankersActions';

import styled from 'styled-components';
import BankerButton from './BankerButton';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AccountColumn = styled.div`
  margin-bottom: 3px;
`;

const ColumnHeader = styled.span`
  font-size: 12px;
  justify-content: center;
`;

class AccountsTable extends Component {
  constructor(props) {
    super(props);
    this.props.fetchBankers();
    this.props.fetchRealms();
  }

  render() {
    if (this.props.bankers.length < 1  || this.props.realms.length < 1) {
      return null;
    }

    const accountColumns = this.props.accounts.map(accNum => (
      <AccountColumn key={accNum}>
        <ColumnHeader>{accNum}</ColumnHeader>
        {this.props.bankers.filter(banker => banker.account === accNum)
          .map(banker => (
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
      <Wrapper>
        {accountColumns}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  bankers: state.bankers.bankers,
  realms: state.bankers.realms,
  accounts: [...new Set(state.bankers.bankers.map(banker => banker.account))],
});

export default connect(
  mapStateToProps, 
  { fetchBankers, fetchRealms, selectBanker }
)(AccountsTable);