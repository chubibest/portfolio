import React from 'react';
import Header from './Components/Header';
import styled from 'styled-components';
import Intro from './Components/Intro';
import ContentWrapper from './Components/ContentWrapper';
import useWindowDimensions from './CustomHooks/windowSize'
import { WindowSize } from './Context/windowSize';
// import Experience from './Components/Experience'

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
    '.btn-margin-top': {
      marginTop: theme.layout.marginBn
    },
    overflow: 'scroll'
}))

function Index() {
  const dimensions = useWindowDimensions()

  return (
    <App className="App">
      <WindowSize.Provider value={dimensions}>
          <Header />
          <ContentWrapper>
            <>
              <Intro />
              {/* <Experience /> */}
            </>
          </ ContentWrapper>
      </WindowSize.Provider>
    </App>
  );
}

// stack overflow, github, leetcode, medium, npm
// https://brittanychiang.com/
// (work, projects, certifications)
export default Index;
