import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import SettingsRadioButton from './SettingsRadioButton';

const Grid = styled.div`
  background-color: #464646;
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-column-gap: 5px;
`;

const Logo = styled.div`
  color: white;
  font-size: 20px;
  background-color: grey;
  border: 1px solid black;
`;

const Category = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, max-content));
`;


class SettingsBar extends Component {
  render() {
    return (
      <Grid className={this.props.className}>
        <Category>
          <SettingsRadioButton
              name="bankers"
              labelText="Account View"
              size={48}
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