import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  toggleBankersTable,
  toggleTradedBankers,
  toggleTradedTooltips,
} from '../actions/settingsActions';
import { clearSelection } from '../actions/bankersActions';

import styled from 'styled-components';
import SettingsButton from './SettingsButton';
import Button from './Button';

const Grid = styled.div`
  background-color: #464646;
  display: grid;
  grid-template-columns: 216px repeat(auto-fit, minmax(2px, min-content));
  grid-column-gap: 10px;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 2.4em;
  font-weight: 650;
  padding: 0 12px 5px 8px;
  white-space: nowrap;
  position: relative;
  margin-left: 25px;
  &::before {
    font-family: 'Material Icons';
    content: 'compare_arrows';
    position: absolute;
    font-size: 2.06rem;
    top: 5px;
    left: -12px;
  }
`;

const Divider = styled.div`
  border-right: 1px solid #616060; 
  height: 70%;
  align-self: center;
`;

class SettingsBar extends Component {
  render() {
    return (
      <Grid className={this.props.className}>
        <Logo>
          TradinGUI
        </Logo>
        <Divider />
        <SettingsButton
          type="radio"
          onChange={() => this.props.toggleBankersTable(true)}
          name="table"
          value={true}
          checked={this.props.settings.accountsTable}
          labelText="Account View"
        />
        <SettingsButton
          type="radio"
          onChange={() => this.props.toggleBankersTable(false)}
          name="table"
          labelText="Realm View"
          value={false}
          checked={!this.props.settings.accountsTable}
        />
        <Divider />
        <SettingsButton
          type="checkbox"
          onChange={() => this.props.toggleTradedBankers(!this.props.settings.hideTradedBankers)}
          labelText="Hide Traded Banks"
          checked={this.props.settings.hideTradedBankers}
        />
        <Divider />
        <SettingsButton
          type="checkbox"
          onChange={() => this.props.toggleTradedTooltips(!this.props.settings.showTradedTooltips)}
          labelText="Show Traded Tooltips"
          checked={this.props.settings.showTradedTooltips}
        />
        <Divider />
        <Button 
          onClick={() => this.props.clearSelection()}
          text='Clear Selection'
          disabled={!this.props.selectionExists}
        />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
  selectionExists: state.bankers.selectedIds.length > 0 ? true : false,
});

export default connect(
  mapStateToProps, 
  { toggleBankersTable, 
    toggleTradedBankers, 
    toggleTradedTooltips, 
    clearSelection,
  }
)(SettingsBar);