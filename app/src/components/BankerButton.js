import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Tooltip = styled.div`
  z-index: 2;
  opacity: 0;
  position: absolute;
  background: #212121;
  color: #bda252;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12),
    0 1px 5px 0 rgba(0,0,0,0.2);
  text-align: start;
  white-space: nowrap;
  pointer-events: none;
  transition: all .2s ease-in-out;
  transform: scale3d(.2,.2,1);
  left: ${props => props.selection ? 106 : 72}px;
  top: ${props => props.selection ? 38 : 22}px;

  & ul {
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    & p b {
      color: #fbe5a8;
      font-weight: 500;
    }
  }
`;

const Button = styled.button`
  display: block;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  padding: 1px 4px;
  overflow: hidden;
  margin-bottom: 5px;
  z-index: 1;
  transition: .25s ease-in-out;
  text-align: center;
  user-select: none; 
  -webkit-tap-highlight-color: transparent;
  box-shadow: 
    0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12),
    0 1px 5px 0 rgba(0,0,0,0.2);
  background: ${props => props.selection ? '#ffba66' : '#e0bd5d'};
  color: #5d4500;
  width: ${props => props.selection ? '120' : '80'}px;
  height: ${props => props.selection ? '48' : '28'}px;
  font-size: ${props => props.selection ? '14.5' : '13'}px;
  font-weight: ${props => props.selection ? '550' : '400'};

  &:disabled {
    background: ${props => props.selection 
      ? '#6f6f6f'
      : props.isSelected
        ? '#98958b'
        : '#464646' } !important;
    color: ${props => props.selection 
      ? '#dedede' 
      : props.isSelected
        ? '#464646'
        : '#717171'} !important;
    cursor: default;
    box-shadow: none;
    pointer-events: ${props => props.showTradedTooltips ? '' : 'none'};
    &:hover {
      background: #616161 !important;
      color: #c5c5c5 !important;
    }
  } 
  &:hover {
    background: ${props => props.selection ? '#e49736' : '#d2a426'};
    color: ${props => props.selection ? '#000000' : '#000000'};
    & + ${Tooltip} {
      opacity: 1;
      transform: scale3d(1,1,1);
    }
  } 
  &:active {
    background: ${props => props.selection ? '#f78900' : '#ffbb00'};
    transition: .15s ease-in-out;
    transform: translateY(0.4px) translateX(0.4px);
  }
  &:focus {
    outline: none;
  }
`;

class BankerButton extends Component {
  render() {
    const buttonText = this.props.selection
    ? [
      this.props.banker.account,
      this.props.realms[this.props.banker.realm].code,
      this.props.banker.name,
    ].join(' ')
    : [
      this.props.realms[this.props.banker.realm].code,
      this.props.banker.bank_num,
      Math.round(this.props.banker.bank_gold / 1000)
    ].join(' ');

    const tooltip = (
      <Tooltip selection={this.props.selection}>
        <ul>
          <p><b>Name:</b> {this.props.banker.name}</p>
          <p><b>Realm:</b> {this.props.banker.realm}</p>
          <p><b>Account:</b> {this.props.banker.account}</p>
          <p><b>Bank:</b> {this.props.banker.bank_num}</p>
          <p><b>Gold:</b> {this.props.banker.bank_gold.toLocaleString()}</p>
        </ul>
      </Tooltip>
    );

    return (
      <Wrapper>
        <Button
          onClick={this.props.onClick}
          selection={this.props.selection}
          disabled={
            this.props.selection
            ? this.props.banker.trade_confirmation === 1
            : this.props.selectedIds.includes(this.props.banker.id)
            || this.props.banker.trade_confirmation === 1
          }
          showTradedTooltips={this.props.showTradedTooltips}
          isSelected={this.props.selectedIds.includes(this.props.banker.id)}
        >
          {buttonText}
        </Button>
        {tooltip}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  banker: state.bankers.bankers[ownProps.bankerId-1],
  realms: state.bankers.realms,
  selectedIds: state.bankers.selectedIds,
  showTradedTooltips: state.settings.showTradedTooltips,
});

export default connect(mapStateToProps)(BankerButton);