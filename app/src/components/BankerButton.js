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
  transition: .3s ease-in-out;
  text-align: center;
  user-select: none; 
  -webkit-tap-highlight-color: transparent;
  box-shadow: 
    0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12),
    0 1px 5px 0 rgba(0,0,0,0.2);

  background-color: ${props => props.selected ? '#ffc66d' : '#ffd561'};
  width: ${props => props.selected ? '120' : '80'}px;
  height: ${props => props.selected ? '48' : '28'}px;
  font-size: ${props => props.selected ? '14.5' : '13'}px;

  &:disabled {
    background-color: ${props => props.selected ? '#d4c7a2' : '#DFDFDF'} !important;
    color: ${props => props.selected ? '#a3a3a3' : '#9f9f9f'} !important;
    pointer-events: none;
    cursor: default;
    box-shadow: none;
  }
  
  &:hover {
    background: ${props => props.selected ? '#f3a52b' : '#ffa930'};
  } 

  &:focus {
    outline: none;
  }

  &:active {
    background: ${props => props.selected ? '#d48100' : '#db7c32'};
    transition: .1s ease-in-out;
    transform: translateY(0.5px) translateX(0.5px);
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