import React, {Component} from 'react';

import AccountTable from './components/AccountTable/AccountTable';
import BankerSelection from './components/BankerSelection/BankerSelection';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Statistics />
        <BankerSelection />
        <AccountTable />
      </div>
    );
  }
}

export default App;
