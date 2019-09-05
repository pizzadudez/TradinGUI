import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import Collapsible from './Collapsible';
import TradeListOperations from './TradeListOperations';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(36px, min-content));
  grid-row-gap: 8px;
  &::before {
    content: 'Trading Sessions';
    color: #e0dcb2;
    font-weight: 550;
    font-size: 1.5em;
  }
`;

const Content = styled.div`
  padding: 5px 10px;
`;

const Info = styled.div`
  border-bottom: 1px solid black;
  padding: 5px 0;
`;

const List = styled.ul`
  padding-inline-start: 20px;
  margin-block-start: 10px;
  margin-block-end: 5px;
`;

class TradeList extends Component {
  infoText(session) {
    if (!session[0]) return;
    const numBankers = session.length;
    const timeLen = Math.round((session[numBankers-1].trade_timestamp -
      session[0].trade_timestamp) / 1000 / 3600 * 100) / 100;
    const totalGold = session.reduce((total, banker) =>
      total + banker.bank_gold, 0);
    const totalMilGold = Math.round(totalGold / 1000000 * 100) / 100;
    
    const timeString = timeLen > 0
      ? `in ${timeLen} hours.`
      : 'instantly.';

    return (`Total of ${numBankers} bankers traded ${timeString}
      Total ammount of ${totalMilGold} mil gold.`
    );
  }
  headerText(session) {
    if (!session[0]) return;
    const datetime = new Date(session[0].trade_timestamp);
    const date = datetime.toLocaleDateString('en-GB');
    const time = datetime.toLocaleTimeString('en-GB');
    return (`${date} - ${time}`);
  }
  render() {
    if (this.props.bankers.length < 1) {
      return null;
    }

    let tradeSessionChunks = this.props.tradedBankers.reduce((arr, banker) => {
      let lastSession = arr[arr.length-1];
      let lastBanker = lastSession[lastSession.length-1] || banker;
      (banker.trade_timestamp - lastBanker.trade_timestamp)/1000 < 8 * 3600
      ? lastSession.push(banker)
      : arr[arr.length] = [banker];
      return arr;
    }, [[]]);
    // empty list if nothing has been traded
    if (tradeSessionChunks[0].length < 1) {
      tradeSessionChunks = [];
    }

    const tradeSessions = tradeSessionChunks.map((session, idx) => (
      <Collapsible
        key={idx}
        header={this.headerText(session)}
        content={(
          <Content>
            <Info>
              <span>{this.infoText(session)}</span>
            </Info>
            <List>
              {session.map(banker => (
                <li key={banker.id}>
                {[Math.round(banker.bank_gold / 1000) / 1000, 'm:', 
                  [banker.name, banker.realm].join('-')].join(' ')}
                </li>
              ))}
            </List>
          </Content>
        )}
      />
    ));

    return (
      <Wrapper className={this.props.className}>
        {this.props.showTradedOperations 
          ? <TradeListOperations 
              latestSessionBankers={tradeSessionChunks[tradeSessionChunks.length-1]} 
              allTradedBankers={this.props.tradedBankers}
            /> 
          : null} 
        {tradeSessions}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  bankers: state.bankers.bankers,
  tradedBankers: state.bankers.bankers.filter(banker =>
    banker.trade_timestamp !== null
    ).sort((a, b) => a.trade_timestamp - b.trade_timestamp),
  showTradedOperations: state.settings.showTradedOperations,
});

export default connect(mapStateToProps)(TradeList);