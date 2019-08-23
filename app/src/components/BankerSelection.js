import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBanker } from '../actions/bankersActions'

import styled from 'styled-components';
import BankerButton from './BankerButton';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  grid-column-gap: 5px;
`;

class BankerSelection extends Component {
  render() {
    const selectedBankers = this.props.selectedBankers.map(banker => (
      <BankerButton 
        selected
        key={banker.id}
        bankerId={banker.id}
        onClick={() => this.props.updateBanker(banker, Date.now())}
      />
    ));
    return (
      <Grid className={this.props.className}>
        {selectedBankers}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  selectedBankers: state.bankers.selectedIds.map(id =>
    state.bankers.bankers[id-1]
  ).sort((a, b) => (a.account - b.account)),
});

export default connect(mapStateToProps, { updateBanker })(BankerSelection);