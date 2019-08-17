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
        width: 76,
        float: 'left',
        marginLeft: 4,
      },
    })(List);

    const StyledButton = withStyles({
      root: {
        background: 'linear-gradient(45deg, #2ea8ff 40%, #54b8ff 90%)',
        borderRadius: 1,
        border: 0,
        width: '100%',
        fontSize: 11,
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
        style={banker.bank_num === 0 ? {background: 'orange'} : {}}
      >
        {[this.props.realms[banker.realm].code, 
          banker.bank_num, Math.round(banker.bank_gold/1000)].join(' ')}
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
  realms: state.bankers.realms,
});

export default connect(mapStateToProps, { clickBanker })(BankerList);