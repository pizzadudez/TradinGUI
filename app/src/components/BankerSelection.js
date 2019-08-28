import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBanker } from '../actions/bankersActions'

import styled from 'styled-components';
import BankerButton from './BankerButton';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  grid-column-gap: 4px;
  &::before {
    content: 'Selected bankers will appear here...';
    position: absolute;
    color: #7b7b7b;
    font-weight: 550;
    font-size: 1.5em;
    white-space: nowrap;
    opacity: ${props => props.placeHolderText};
  }
`;

class BankerSelection extends Component {
  render() {
    const selectedBankers = this.props.selectedBankers.map(banker => (
      <BankerButton 
        selection
        key={banker.id}
        bankerId={banker.id}
        onClick={() => this.props.updateBanker(banker, Date.now())}
      />
    ));
    return (
      <Grid 
        className={this.props.className}
        placeHolderText={this.props.selectedBankers.length ? 0 : 1}
      >
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