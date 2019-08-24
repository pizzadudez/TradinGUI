import React, { Component } from 'react';

import styled from 'styled-components';
import AccountsTable from './components/AccountsTable';
import RealmList from './components/RealmList';
import BankerSelection from './components/BankerSelection';
import TradeList from './components/TradeList';

const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 40px 350px auto;
  grid-template-columns: 0px 350px minmax(421px, 886px) auto 0px;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-template-areas:
  'nav nav nav nav nav'
  '. stats innergrid realm .'
  '. sessions innergrid realm .';
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


class App extends Component {
  render() {
    return(
      <GridLayout>
        <div style={{gridArea: 'nav', background: 'grey',}}>Navbar</div>
        <div style={{gridArea: 'stats', background: 'lightgrey',
      boxShadow: '3px 6px 6px 0 rgba(0,0,0,0.3)', borderRadius: '4px',}}>Stats</div>
        <_TradeList />
        <InnerGrid>
          <_BankerSelection />
          <_AccountsTable />
          <_RealmList />
        </InnerGrid>
      </GridLayout>
    );
  }
}

export default App;
