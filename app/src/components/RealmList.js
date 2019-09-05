import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBanker } from '../actions/bankersActions';

import styled from 'styled-components';
import BankerButton from './BankerButton';

const Grid = styled.div`
`;

const RealmContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, max-content));
  grid-column-gap: 3px;
  justify-items: end;
  border-bottom: 1px solid #46443f;
  margin-bottom: 5px;
`;

const RealmName = styled.span`
  width: 100%;
  display: block;
  color: #b3b093;
  font-size: 17px;
  justify-self: start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

class RealmList extends Component {
  render() {
    if (this.props.bankers.length < 1
      || this.props.realms.length < 1
      || this.props.disabled) {
      return null;
    }
    
    const realmList = this.props.realms.map(realm => (
      <RealmContainer key={realm}>
        <RealmName>{realm}</RealmName>
        {this.props.bankers.filter(banker => 
          banker.realm === realm 
          && (!banker.trade_confirmation || !this.props.hideTradedBankers
          )).map(banker => (
            <BankerButton 
              key={banker.id} 
              bankerId={banker.id}
              onClick={() => this.props.selectBanker(banker.id)}    
            />
          ))
        }
      </RealmContainer>
    ));

    return (
      <Grid className={this.props.className}>
        {realmList}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  bankers: state.bankers.bankers,
  realms: Object.keys(state.bankers.realms),
  hideTradedBankers: state.settings.hideTradedBankers,
});

export default connect(mapStateToProps, { selectBanker })(RealmList);