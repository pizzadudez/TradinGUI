import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import AccountsTable from './components/AccountsTable';
import RealmList from './components/RealmList';
import BankerSelection from './components/BankerSelection';
import TradeList from './components/TradeList';
import SettingsBar from './components/SettingsBar';

const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0px 350px minmax(421px, 886px) auto 0px;
  grid-template-rows: 40px 350px auto;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-template-areas:
  'settings settings settings settings settings'
  '. stats innergrid . .'
  '. sessions innergrid . .';
`;

const InnerGrid = styled.div`
  grid-area: innergrid;
  display: grid;
  grid-template-rows: minmax(116px, auto) 1fr;
  grid-row-gap: 10px;
  grid-template-areas:
  'selection'
  'table';
`;

const _AccountsTable = styled(AccountsTable)`
  grid-area: table;
`;

const _RealmList = styled(RealmList)`
  grid-area: table;
`;

const _BankerSelection = styled(BankerSelection)`
  grid-area: selection;
`;

const _TradeList = styled(TradeList)`
  grid-area: sessions;
`;

const _SettingsBar = styled(SettingsBar)`
  grid-area : settings;
  background: grey;
`;

const _StatsCard = styled.div`
  grid-area: stats;
  background: lightgrey;
  box-shadow: 3px 6px 6px 0 rgba(0,0,0,0.3);
  border-radius: 4px;
`;


class App extends Component {
  render() {
    return(
      <GridLayout>
        {/*
        <div style={{gridArea: 'settings', background: 'red',}}></div>
        */}
        <_StatsCard />
        <_TradeList />
        <InnerGrid>
          <_BankerSelection />
          <_AccountsTable disabled={!this.props.settings.accountsTable} />
          <_RealmList disabled={this.props.settings.accountsTable} />
        </InnerGrid>
        <_SettingsBar />
      </GridLayout>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(App);
