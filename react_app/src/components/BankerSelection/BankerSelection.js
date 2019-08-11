import React, { Component } from 'react';
import { connect } from 'react-redux';

import BankerList from '../BankerList/BankerList';

import Container from '@material-ui/core/Container';

class BankerSelection extends Component {
  render() {
    return (
      <Container>
        <BankerList>
          <p>BankerSelection</p>
        </BankerList>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  selected: state.bankers.bankers.filter(banker => banker.trade_confirmed)
};

export default connect(mapStateToProps)(BankerSelection);