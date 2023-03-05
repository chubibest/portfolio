import React from 'react';
import Header from './Components/Header';
import styled from 'styled-components';
import Intro from './Components/Intro';
import ContentWrapper from './Components/ContentWrapper';


const App = styled.div(({ theme }) => ({
    'text-align': 'center',
    height: '100vh',
    padding: '2vh 3vw',
    width: '100vw',
    color: theme.colors.normal,
    '.fontLarge': {
      fontSize: theme.fonts.sizes.large
    },
    '.fontSmall': {
      fontSize: theme.fonts.sizes.small
    },
    '.fontMedium': {
      fontSize: theme.fonts.sizes.medium
    },
    '.faded': {
      color: theme.colors.faded
    },
    overflow: 'scroll'
}))

function Index() {
  return (
    <App className="App">
      <Header />
      <ContentWrapper>
        <Intro />
      </ ContentWrapper>
    </App>
  );
}

// stack overflow, github, leetcode, medium, npm
// https://brittanychiang.com/
// (work, projects, certifications)
export default Index;
