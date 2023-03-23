import Header from './Components/Header';
import styled, { ThemeProvider } from 'styled-components';
import Intro from './Components/Intro';
import ContentWrapper from './Components/ContentWrapper';
import { WindowSize } from './Context/windowSize';
import theme, { mobileTheme } from './theme'
import Footer from './Components/Footer/Footer';
import useWindowResize from './CustomHooks/windowSize'

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
    // media query tab
    // '@media (min-width: 481px) and (max-width: 767px)' {
    //   paddingBottome
    // },
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
  // const [isMobile, setIsMobile] = useState(window.innerWidth < window.innerHeight)

  // useEffect(() => {
  //   setIsMobile(window.innerWidth < window.innerHeight)
  // });

  const isMobile = useWindowResize()
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
