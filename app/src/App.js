import React, { Component } from 'react';

import styled from 'styled-components';
import AccountsTable from './components/AccountsTable';
import BankerSelection from './components/BankerSelection';

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


class App extends Component {
  render() {
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
      </>
    );
  }
}

export default App;
