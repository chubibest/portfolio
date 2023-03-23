const faded = '#8892b0'
// const lively = 'mediumseagreen'
const lively = '#64ffda'
const normal = '#F8F0E3'

// BLACK PINK
const theme = {
    button: lively,
    colors: {
        normal,
        lively,
        faded,
        lightPink: '#ff879c',
        boldPink: '#ff0934'
    },
    fonts: {
        callToAction: 'bla bla bla',
        main: 'bla bla',
        sizes: {
            small: '1.2vw',
            medium: '2vw',
            large: '5vw'
        }
    },
    layout: {
        third: '33vw',
        marginBn: '8vh',
        pageMargin: '3vw'
    }
}

export const mobileTheme = ({
    ...theme,
    fonts: {
      ...theme.fonts,
      sizes: {
        small: '3vw',
        medium: '4vw',
        large: '7vw'
      }
    }
})

// export const mobileTheme = theme
export default theme