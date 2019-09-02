import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wipeTrade } from '../actions/bankersActions';

import styled from 'styled-components';
import Button from './Button';
import SettingsButton from './SettingsButton';

const Wrapper = styled.div`
  padding: 10px 10px;
  background: #4e4c47;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12), 
    0 1px 5px 0 rgba(0,0,0,0.2);
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1px, max-content));
  grid-column-gap: 12px;
  justify-content: center;
`;

const WarningSection = styled.div`
  &::before {
    font-family: 'Material Icons';
    content: 'warning';
    font-size: 2.46rem;
    float: left;
    margin-right: 3px;
    margin-top: 3px;
    color: #ff6c6c;
  }
  > p {
    color: #ef5e5e;
    white-space: pre-line;
    margin-block-start: 12px;
    margin-block-end: 12px;
  }
  > div {
    display: flex;
    justify-content: center;
  }
  >div>label>div {
    border-color: #ef5e5e;
  }
  >div>label>p {
    color: #ef5e5e;
  }
`;

class TradeListOperations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localOnly: true,
    }
  }
  render() {
    return (
      <Wrapper>
        <Buttons>
          <Button 
            text="Wipe Lastest Session"
            onClick={() => 
              this.props.wipeTrade(this.props.latestSessionBankers, this.state.localOnly)}
          />
          <Button 
            text="Wipe All"
            onClick={() => 
              this.props.wipeTrade(this.props.allTradedBankers, this.state.localOnly)}
          />
        </Buttons>
        <WarningSection>
          <p>
            Checking the 'Database Wipe' box will cause all trade information to
            be <b>permanently</b> lost! 
          </p>
          <SettingsButton
            type="checkbox"
            onChange={() => this.setState({ localOnly: !this.state.localOnly })}
            labelText="Permanent Database Wipe"
            checked={!this.state.localOnly}
          />
        </WarningSection>
      </Wrapper>
    );
  }
}

export default connect(null, { wipeTrade })(TradeListOperations);