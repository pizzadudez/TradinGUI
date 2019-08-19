import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBanker } from '../actions/bankersActions';

import styled from 'styled-components';

const Button = styled.button`
  display: block;
  position: relative;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: #ffd561;
  padding: 1px 8px;
  overflow: hidden;
  width: 80px;
  height: 28px;
  margin: 3px;
  z-index: 1;
  box-shadow: 
    0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12),
    0 1px 5px 0 rgba(0,0,0,0.2);
  transition: .3s ease-in-out;
  text-align: center;
  user-select: none; 
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    background-color: #DFDFDF !important;
    color: #9F9F9F !important;
    pointer-events: none;
    cursor: default;
    box-shadow: none;
  }
  
  &:hover {
    background: #ffa930;
  } 

  &:focus {
    outline: none;
  }

  &:active {
    background: #db7c32;
    transition: .1s ease-in-out;
    transform: translateY(0.5px) translateX(0.5px);
  }
`;

class BankerButton extends Component {
  render() {
    if (!this.props.banker || !this.props.realms) {
      return null;
    }

    const buttonText = [
      this.props.banker.account,
      this.props.realms[this.props.banker.realm].code,
      this.props.banker.bank_num,
    ].join(' ');

    return (
      <Button
        onClick={this.props.onClick}
        disabled={
          this.props.selected
          ? this.props.banker.trade_confirmation == 1
          : this.props.selectedIds.includes(this.props.banker.id)
          || this.props.banker.trade_confirmation == 1
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

export default connect(mapStateToProps, { selectBanker })(BankerButton);