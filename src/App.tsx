import React from 'react';
import Header from './Components/Header';
import styled from 'styled-components';
import Intro from './Components/Intro';
import ContentWrapper from './Components/ContentWrapper';
import Experience from './Components/Experience'

const App = styled.div(({ theme }) => ({
    'text-align': 'center',
    height: '100vh',
    padding: '2vh 3vw',
    width: '100vw',
    color: theme.colors.faded,
    '.fontLarge': {
      fontSize: theme.fonts.sizes.large
    },
    '.fontSmall': {
      fontSize: theme.fonts.sizes.small
    },
    '.fontMedium': {
      fontSize: theme.fonts.sizes.medium
    },
    '.third': {
      width: theme.layout.third
    },
    '.btn-margin-top': {
      marginTop: theme.layout.marginBn
    },
    overflow: 'scroll'
}))

function Index() {
  return (
    <App className="App">
      <Header />
      <ContentWrapper>
        <>
          <Intro />
          {/* <Experience /> */}
        </>
      </ ContentWrapper>
    </App>
  );
}

// stack overflow, github, leetcode, medium, npm
// https://brittanychiang.com/
// (work, projects, certifications)
export default Index;
