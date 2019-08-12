import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateBanker, changeTimestamp } from '../../actions/bankersActions';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';

class BankerSelection extends Component {
  render() {
    const selectedBankers = this.props.selectedBankers
      .sort((a, b) => (a.account - b.account))
      .map(banker => (
        <Button
          key={banker.id}
          disabled={banker.trade_confirmation ? true : false}
          banker={banker}
          onClick={() => this.props.updateBanker(banker, this.props.timestamp.getTime())}
          style={{background: 'grey', margin: 2,}}
        >
          {[banker.account, banker.realm, banker.name].join(' ')}
        </Button>
      ));


    return (
      <Container>
        <List>
          {selectedBankers}
        </List>
          <DatePicker
            selected={this.props.timestamp}
            onChange={(date) => this.props.changeTimestamp(date)}
          />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  selectedBankers: state.bankers.bankers.filter(banker => 
    state.bankers.selectedBankersIds.includes(banker.id)
  ),
  timestamp: state.bankers.timestamp,
});

export default connect(mapStateToProps, { updateBanker, changeTimestamp })(BankerSelection);