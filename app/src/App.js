import React, { Component } from 'react';

import styled from 'styled-components';
import AccountsTable from './components/AccountsTable';
import BankerSelection from './components/BankerSelection';
import TradeList from './components/TradeList';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
`;

const Container = styled.div`
  border: 1px black solid;
  margin: 2px;
  padding: 1px;
`;

const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 40px 100px 2fr 1fr;
  grid-template-columns: repeat(auto-fit, minmax(300, 1fr));
  grid-template-areas:
  'nav nav nav'
  'stats selection .'
  'stats table table'
  'sessions table table';
`;

const GridItem = styled.div`
`;

const _AccountsTable = styled(AccountsTable)`
  grid-area: table;
  width: 100%;
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
        <GridItem style={{gridArea: 'nav', background: 'grey',}}>Navbar</GridItem>
        <GridItem style={{gridArea: 'stats', background: 'white',}}>Stats</GridItem>
        <_TradeList />
        <_BankerSelection />
        <_AccountsTable />
      </GridLayout>
    );
    /*
    return (
      <>
        <Wrapper>
          <Container>
            <BankerSelection />
          </Container>
          <Container>
            <AccountsTable />
          </Container>
        </Wrapper>
        <TradeList />
      </>
    );
    */
  }
}

export default App;
