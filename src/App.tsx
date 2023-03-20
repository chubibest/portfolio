import Header from './Components/Header';
import styled, { ThemeProvider } from 'styled-components';
import Intro from './Components/Intro';
import ContentWrapper from './Components/ContentWrapper';
import useWindowDimensions from './CustomHooks/windowSize'
import { WindowSize } from './Context/windowSize';
import theme, { mobileTheme } from './theme'
import Footer from './Components/Footer/Footer';

const App = styled.div(({ theme }) => ({
    'text-align': 'center',
    height: '100vh',
    padding: `2vh ${theme.layout.pageMargin}`,
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
    overflow: 'scroll',
}))

function Index() {
  const isMobile = useWindowDimensions()

  return (
    <WindowSize.Provider value={isMobile}>
        <ThemeProvider theme={isMobile ? mobileTheme : theme} >
          <App className="App">
                <Header />
                <ContentWrapper>
                  <>
                    <Intro />
                    {/* <Experience /> */}
                  </>
                </ ContentWrapper>
                <Footer />
          </App>
        </ThemeProvider>
      </WindowSize.Provider>
  );
}

// stack overflow, github, leetcode, medium, npm
// https://brittanychiang.com/
// (work, projects, certifications)
export default Index;
