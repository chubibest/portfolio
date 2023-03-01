import React from 'react';
import Header from './Components/Header';
import styled, { ThemeProvider } from 'styled-components';
import Intro from './Components/Intro';
import theme from './theme'


const App = styled.div(({ theme }) => ({
    'text-align': 'center',
    'background-color': '#0a192f',
    height: '100vh',
    padding: '2vh 3vw',
    width: '100vw',
    color: theme.colors.offWhite
}))

function Index() {
  return (
    <ThemeProvider theme={theme}>
      <App className="App">
        <Header />
        <Intro />
      </App>
    </ThemeProvider>
  );
}

// stack overflow, github, leetcode, medium, npm
// https://brittanychiang.com/
// (work, projects, certifications)
export default Index;
