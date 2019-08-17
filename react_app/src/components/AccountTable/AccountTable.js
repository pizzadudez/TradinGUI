import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBankers, fetchRealms} from '../../actions/bankersActions';
import BankerList from '../BankerList/BankerList';

import Container from '@material-ui/core/Container';


class AccountTable extends Component {
  constructor(props) {
    super(props);
    this.props.fetchBankers();
    this.props.fetchRealms();
  }

  render() {
    const lists = this.props.accounts.map(accNum => 
      <BankerList key={accNum} filterProp={'account'} filterPropVal={accNum} />
    );

    return (
      <Container style={{overflow: 'hidden'}}>
        {lists}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  accounts: [...new Set(state.bankers.bankers.map(banker => banker.account))],
});

export default connect(mapStateToProps, { fetchBankers, fetchRealms })(AccountTable);