import React, {Component} from 'react';

import AccountTable from './components/AccountTable/AccountTable';
import BankerSelection from './components/BankerSelection/BankerSelection';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <BankerSelection />
        <AccountTable />
      </div>
    );
  }
}

export default App;
