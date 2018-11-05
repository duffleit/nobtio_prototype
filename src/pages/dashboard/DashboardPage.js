import React from 'react';
import Header from '../../components/Header/Header';
import HeaderTitle from '../../components/Header/HeaderTitle';
import HeaderSubtitle from '../../components/Header/HeaderSubtitle';
import Frame from '../../container/AppContainer/components/Frame';
import HeaderActionButton from '../../components/Header/HeaderActionButton';

export default () => (
  <div>
    <Header>
      <HeaderTitle>Kevin Bauer Geburtstagsparty</HeaderTitle>
      <HeaderSubtitle>
        bills of <b>5 people</b> add up to <b>210,50€</b>.
      </HeaderSubtitle>
      <HeaderActionButton>Balances</HeaderActionButton>
    </Header>
    <div style={{ height: '10000px' }} />
  </div>
);
