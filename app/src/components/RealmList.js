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
  grid-template-columns: repeat(auto-fit, minmax(80px, max-content));
  grid-column-gap: 3px;
  justify-items: end;
  border-bottom: 1px solid grey;
  margin-bottom: 5px;
`;

const RealmName = styled.span`
  width: 100%;
  display: block;
  color: white;
  font-size: 17px;
  justify-self: start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

class RealmList extends Component {
  render() {
    if (this.props.bankers.length < 1  || this.props.realms.length < 1) {
      return null;
    }
    
    const realmList = this.props.realms.map(realm => (
      <RealmContainer>
        <RealmName>{realm}</RealmName>
        {this.props.bankers.filter(banker => banker.realm === realm)
          .map(banker => (   
            <BankerButton
            key={banker.id}
            bankerId={banker.id}
            onClick={() => this.props.selectBanker(banker.id)}
            style={{justifySelf: 'end',}}
            />
          )
        )}
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