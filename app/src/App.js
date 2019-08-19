import React, { Component } from 'react';
import AccountsTable from './components/AccountsTable';

import styled from 'styled-components';

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
            <AccountsTable />
          </Container>
          <Container>
            item2
          </Container>
        </Wrapper>
      </>
    );
  }
}

export default App;
