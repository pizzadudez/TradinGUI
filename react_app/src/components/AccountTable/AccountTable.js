import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBankers } from '../../actions/postActions'
//import { fetchBankers } from 'D:\\_Repos\\bankersApp\\react_app\\src\\actions\\postActions';

class AccountTable extends Component {
  componentWillMount() {
    this.props.fetchBankers();
  }

  render() {
    const test = this.props.bankers.map(banker => (
      <div key={banker.name}>
        {banker.name}
      </div>
    ));

    return (
      <div>
        <div>
          {this.props.accounts}
        </div>
        <div>
          {test}
        </div>
      </div>
    ); 
  }
}

const mapStateToProps = state => ({
  bankers: state.posts.bankers.filter(banker => banker.account === 1),
  accounts: [...new Set(state.posts.bankers.map(banker => banker.account))]
});

export default connect(mapStateToProps, { fetchBankers })(AccountTable);