import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  toggleBankersTable,
  toggleTradedBankers,
} from '../actions/settingsActions';

import styled from 'styled-components';
import SettingsRadioButton from './SettingsRadioButton';

const Grid = styled.div`
  background-color: #464646;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
  grid-column-gap: 20px;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 26px;
  display: grid;
  place-items: center;
  padding: 0 12px 0 8px;
`;

const Category = styled.div`
  display: flex;
  position: relative;
`;

const Divider = styled.div`
  border-right: 1px solid #616060; 
  height: 100%;
  position: absolute;
  right: 0;
`;


class SettingsBar extends Component {
  render() {
    return (
      <Grid className={this.props.className}>
        <Logo>
          Trading App
        </Logo>
        <Category>
          <SettingsRadioButton
              onChange={() => this.props.toggleBankersTable(true)}
              name="table"
              value={true}
              checked={this.props.settings.accountsTable}
              labelText="Account View"
          />
          <SettingsRadioButton
              onChange={() => this.props.toggleBankersTable(false)}
              name="table"
              labelText="Realm View"
              value={false}
              checked={!this.props.settings.accountsTable}
          />
        </Category>
        <Category>
          <SettingsRadioButton
              onChange={() => this.props.toggleTradedBankers(true)}
              name="bankers"
              value={true}
              checked={this.props.settings.showTraded}
              labelText="Show Traded Banks"
          />
          <SettingsRadioButton
              onChange={() => this.props.toggleTradedBankers(false)}
              name="bankers"
              labelText="Hide"
              value={false}
              checked={!this.props.settings.showTraded}
          />
        </Category>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

export default connect(
  mapStateToProps, 
  { toggleBankersTable, toggleTradedBankers }
)(SettingsBar);