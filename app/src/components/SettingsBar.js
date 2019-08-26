import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import SettingsRadioButton from './SettingsRadioButton';

const Grid = styled.div`
  background-color: #464646;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
  grid-column-gap: 5px;
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
  border-left: 0.5px solid #565656; 
  border-right: 0.5px solid #7d7d7d; 
  height: 80%;
  position: absolute;
  right: 0px;
  top: 10%;
  margin-left: 10px;
`;


class SettingsBar extends Component {
  render() {
    return (
      <Grid className={this.props.className}>
        <Logo>
          TradingApp
        </Logo>
        <Category>
          <SettingsRadioButton
              name="bankers"
              labelText="Account View"
          />
          <SettingsRadioButton
              name="bankers"
              labelText="Realm View"
          />
          <Divider />
        </Category>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(SettingsBar);