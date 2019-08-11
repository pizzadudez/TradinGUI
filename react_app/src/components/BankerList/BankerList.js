import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clickBanker } from '../../actions/bankersActions';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';


class BankerList extends Component {
  render() {
    const StyledList = withStyles({
      root: {
        width: 80,
        float: 'left',
        marginLeft: 4,
      },
    })(List);

    const StyledButton = withStyles({
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        width: 80,
        fontSize: 9,
        marginBottom: 2,
        padding: '2px 3px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        textTransform: 'none',
        overflow: 'hidden',
        display: 'inline-block',
      },
    })(Button);

    const bankers = this.props.bankers.map(banker => (
      <StyledButton
        key={banker.id}
        disabled={banker.trade_confirmation ? true : false}
        onClick={() => this.props.clickBanker(banker.id)}
      >
        {[banker.bank_num, banker.realm].join(' ')}
      </StyledButton>
    ));

    return (
      <StyledList>
        {bankers}
      </StyledList>
    ); 
  }
}

const mapStateToProps = (state, ownProps) => ({
  bankers: state.bankers.bankers.filter(banker => banker.account === ownProps.accNum),
});

export default connect(mapStateToProps, { clickBanker })(BankerList);