import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBankers } from '../../actions/postActions';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


class AccountTable extends Component {

  componentWillMount() {
    this.props.fetchBankers();
  }

  render() {
    const StyledList = withStyles({
      root: {
        width: 70,
        size: 12,
      },
    })(List);

    const StyledButton = withStyles({
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        width: 70,
        fontSize: 11,
        marginBottom: 2,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    })(Button);

    const bankers = this.props.bankers.map(banker => (
      <StyledButton disabled={banker.realm === 'Blackmoore' ? true : false} >
        {banker.name}
      </StyledButton>
    ));

    return (
      <StyledList>
        {bankers}
      </StyledList>
    ); 
  }
}

const mapStateToProps = state => ({
  bankers: state.posts.bankers.filter(banker => banker.account === 1),
  accounts: [...new Set(state.posts.bankers.map(banker => banker.account))]
});

export default connect(mapStateToProps, { fetchBankers })(AccountTable);