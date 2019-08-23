import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBanker } from '../actions/bankersActions';

import styled from 'styled-components';
import BankerButton from './BankerButton';

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit);
`;

const RealmContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-column-gap: 3px;
  grid-template-areas:
  'name buttons';
`;

const RealmButtons = styled.div`
  grid-area: buttons;
  display: grid;
  grid-template-columns: repeat(auto-fit, 80px);
  grid-column-gap: 5px;
`;

const RealmName = styled.div`
  grid-area: name;
  color: white;
  font-size: 17px;
`;

class RealmList extends Component {
  render() {
    if (this.props.bankers.length < 1  || this.props.realms.length < 1) {
      return null;
    }
    
    const realmList = this.props.realms.map(realm => (
      <RealmContainer>
        <RealmName>{realm}</RealmName>
        <RealmButtons key={realm}>
          {this.props.bankers.filter(banker => banker.realm === realm)
            .map(banker => (    
              <BankerButton
              key={banker.id}
              bankerId={banker.id}
              onClick={() => this.props.selectBanker(banker.id)}
              />
              ))}
            </RealmButtons>
      </RealmContainer>
    ));

    return (
      <Grid>
        {realmList}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  bankers: state.bankers.bankers,
  realms: Object.keys(state.bankers.realms),
});

export default connect(mapStateToProps, { selectBanker })(RealmList);