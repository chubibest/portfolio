import Header from './Components/Header';
import styled, { ThemeProvider } from 'styled-components';
import Intro from './Components/Intro';
import ContentWrapper from './Components/ContentWrapper';
import theme from './theme'
import Footer from './Components/Footer/Footer';

const App = styled.div(({ theme }) => ({
    'text-align': 'center',
    height: '100%',
    padding: `2vh ${theme.layout.pageMargin}`,
    width: '100vw',
    minHeight: '100vh',
    position: 'relative',
    color: theme.colors.faded,
    '@media (orientation: portrait)': {
      height: '100svh',
      minHeight: '100svh',  
    },
    '.fontLarge': {
      fontSize: theme.fonts.sizes.large,
      '@media (orientation: portrait)': {
        fontSize: theme.fonts.sizes.mobile.large,
      }
    },
    '.fontSmall': {
      fontSize: theme.fonts.sizes.small,
      '@media (orientation: portrait)': {
        fontSize: theme.fonts.sizes.mobile.small,
      }
    },
    '.fontMedium': {
      fontSize: theme.fonts.sizes.medium,
      '@media (orientation: portrait)': {
       fontSize: theme.fonts.sizes.mobile.medium,
      }
    },
    '.btn-margin-top': {
      marginTop: theme.layout.marginBn
    }
}))

function Index() {
  return (

    <ThemeProvider theme={theme} >
      <App className="App">
            <Header />
            <ContentWrapper>
              <>
                <Intro />
              </>
            </ ContentWrapper>
            <Footer />
      </App>
    </ThemeProvider>

  );
}

// stack overflow, github, leetcode, medium, npm
// https://brittanychiang.com/
// (work, projects, certifications)
export default Index;
