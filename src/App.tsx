import React from 'react';
import Header from './Components/Header';
import styled from 'styled-components';

const App = styled.div({
    'text-align': 'center',
    'background-color': '#0a192f',
    height: '100vh',
    padding: '2vh 3vw',
    width: '100vw'
})

function Index() {
  return (
    <App className="App">
      <Header />
    </App>
  );
}

// stack overflow, github, leetcode, medium, npm
// https://brittanychiang.com/
// (work, projects, certifications)
export default Index;
