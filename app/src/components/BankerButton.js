import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const Button = styled.button`
  display: block;
  position: relative;
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

  background-color: ${props => props.selected ? '#ffba66' : '#e0bd5d'};
  color: #5d4500;
  width: ${props => props.selected ? '120' : '80'}px;
  height: ${props => props.selected ? '48' : '28'}px;
  font-size: ${props => props.selected ? '14.5' : '13'}px;
  font-weight: ${props => props.selected ? '550' : '400'};

  &:disabled {
    background-color: ${props => props.selected ? '#6f6f6f' : '#464646'} !important;
    color: ${props => props.selected ? '#dedede' : '#717171'} !important;
    pointer-events: none;
    cursor: default;
    box-shadow: none;
  }
  
  &:hover {
    background: ${props => props.selected ? '#e49736' : '#d2a426'};
    color: ${props => props.selected ? '#000000' : '#000000'};
  } 

  &:focus {
    outline: none;
  }

  &:active {
    background: ${props => props.selected ? '#f78900' : '#ffbb00'};
    transition: .15s ease-in-out;
    transform: translateY(0.4px) translateX(0.4px);
  }
`;

class BankerButton extends Component {
  render() {
    const buttonText = this.props.selected
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

    return (
      <Button
        onClick={this.props.onClick}
        selected={this.props.selected}
        disabled={
          this.props.selected
          ? this.props.banker.trade_confirmation === 1
          : this.props.selectedIds.includes(this.props.banker.id)
          || this.props.banker.trade_confirmation === 1
        }
      >
        {buttonText}
      </Button>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  banker: state.bankers.bankers[ownProps.bankerId-1],
  realms: state.bankers.realms,
  selectedIds: state.bankers.selectedIds,
});

export default connect(mapStateToProps)(BankerButton);