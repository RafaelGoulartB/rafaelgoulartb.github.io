
import { theme, DefaultTheme } from '@chakra-ui/core'

const breakpoints = ["360px", "768px", "1024px", "1440px"];
// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Oswald, sans- serif",
    heading: "Oswald, sans-serif",
    mono: "Oswald, sans-serif",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
  },
  radii: {
    ...theme.radii,
    sm: '4px',
  },
  fontSizes: {
    ...theme.fontSizes,
    '5xl': '46px',
    '6xl': '52px'
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      500: "#212529"
    }
  },
  breakpoints
}

export default customTheme
