import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const StyledLi = styled.li`
  color: #c1c1c1;
`;

class TradeList extends Component {
  render() {
    if (this.props.tradedBankers.length < 1) {
      return null;
    }

    const tradeSessionChunks = this.props.tradedBankers.reduce((arr, banker) => {
      let lastSession = arr[arr.length-1];
      let lastBanker = lastSession[lastSession.length-1] || banker;
      (banker.trade_timestamp - lastBanker.trade_timestamp)/1000 < 8 * 3600
      ? lastSession.push(banker)
      : arr[arr.length] = [banker];
      return arr;
    }, [[]]);
    
    const tradeSessions = tradeSessionChunks.map((session, idx) => (
      <div key={idx}>
        <div style={{color: "#c1c1c1", fontSize: "18px", marginLeft: "10px",}}>
          <strong>{new Date(session[0].trade_timestamp).toLocaleString('de-DE')}</strong>
        </div>
        <ol style={{marginTop: "2px",}}>
          {session.map(banker => (
            <StyledLi key={banker.id}>
            {[Math.round(banker.bank_gold / 1000) / 1000,
              [banker.name, banker.realm].join('-')].join(' ')}
            </StyledLi>
            ))}
        </ol>
      </div>
    ));

    return (
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {tradeSessions}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tradedBankers: state.bankers.bankers.filter(banker =>
    banker.trade_timestamp !== null
    ).sort((a, b) => a.trade_timestamp - b.trade_timestamp),
});

export default connect(mapStateToProps)(TradeList);