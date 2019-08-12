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
        background: 'linear-gradient(45deg, #6ab8cc 40%, #84e2fa 90%)',
        borderRadius: 1,
        border: 0,
        width: 80,
        fontSize: 9,
        marginBottom: 2,
        padding: '2px 3px',
        boxShadow: '0 0 1px 1px rgba(0, 0, 0, .3)',
        textTransform: 'none',
        overflow: 'hidden',
        display: 'inline-block',
      },
      disabled: {
        background: 'linear-gradient(45deg, #858585 30%, #a8a5a5 90%)',
      }
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
  bankers: state.bankers.bankers.filter(banker => 
    banker[ownProps.filterProp] === ownProps.filterPropVal
  ),
});

export default connect(mapStateToProps, { clickBanker })(BankerList);