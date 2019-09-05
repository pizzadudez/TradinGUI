import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import AccountsTable from './components/AccountsTable';
import RealmList from './components/RealmList';
import BankerSelection from './components/BankerSelection';
import TradeList from './components/TradeList';
import SettingsBar from './components/SettingsBar';
import StatsCard from './components/StatsCard';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 0px 320px minmax(421px, 886px) auto 0px;
  grid-template-rows: auto 330px auto auto;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  grid-template-areas:
  'settings settings settings settings settings'
  '. stats innergrid . .'
  '. sessions innergrid . .'
  'footer footer footer footer footer';
`;

const InnerGrid = styled.div`
  grid-area: innergrid;
  display: grid;
  grid-template-rows: minmax(53px, min-content) min-content;
  grid-row-gap: 10px;
  grid-template-areas:
  'selection'
  'table';
`;

const AccountsTableArea = styled(AccountsTable)`
  grid-area: table;
`;

const RealmListArea = styled(RealmList)`
  grid-area: table;
`;

const BankerSelectionArea = styled(BankerSelection)`
  grid-area: selection;
`;

const TradeListArea = styled(TradeList)`
  grid-area: sessions;
`;

const SettingsBarArea = styled(SettingsBar)`
  grid-area : settings;
`;

const StatsCardArea = styled(StatsCard)`
  grid-area: stats;
`;

const Footer = styled.div`
  grid-area: footer;
  height: 120px;
  border-top: 1px solid #424242;
  background: #252323;
`;

class App extends Component {
  render() {
    return(
      <GridLayout>
        <SettingsBarArea />
        <StatsCardArea />
        <TradeListArea />
        <InnerGrid>
          <BankerSelectionArea />
          <AccountsTableArea disabled={!this.props.settings.accountsTable} />
          <RealmListArea disabled={this.props.settings.accountsTable} />
        </InnerGrid>
        <Footer />
      </GridLayout>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(App);
