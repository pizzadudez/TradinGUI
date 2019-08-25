import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import SettingsRadioButton from './SettingsRadioButton';

const Grid = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-column-gap: 5px;
`;

const Logo = styled.div`
  color: white;
  font-size: 20px;
  background-color: grey;
  border: 1px solid black;
`;

const Category = styled.div`
  display: flex;
`;


class SettingsBar extends Component {
  render() {
    return (
      <Grid className={this.props.className}>
        <Category>
          <SettingsRadioButton
              name="bankers"
              labelText="Account View"
          />
          <SettingsRadioButton
              name="bankers"
              labelText="Realm View"
          />
        </Category>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(SettingsBar);