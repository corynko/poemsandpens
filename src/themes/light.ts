import { createTheme } from '@mui/material/styles';

import { PaletteOptions, TypeBackground } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface TypeBackground {
    strokeColor?: string;
    fillColor?: string;
  }
  interface TypeSvg {
    strokeColor?: string;
    fillColor?: string;
  }
  interface TypeSvg2 {
    strokeColor?: string;
    fillColor?: string;
  }
  interface TypeSvg3 {
    strokeColor?: string;
    fillColor?: string;
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>;
    svg?: Partial<TypeSvg>;
    svg2?: Partial<TypeSvg>;
    svg3?: Partial<TypeSvg>;
  }
}


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1377C9',
    },
    secondary: {
      main: '#6b3f79',
    },
    error: {
      main: '#F42272',
    },
    success: {
      main: '#22A2DD',
    },
    info: {
      main: '#8BBF9F',
    },
    warning: {
      main: '#EF959C',
    },
    background: {
      default: '#ffffff',
      strokeColor: '#000000',  // Custom property
      fillColor: '#ffffff00',    // Custom property
    },
    svg: {fillColor: '#A37A4E' },
    svg2: {fillColor: '#F7D59C' },
    svg3: {fillColor: '#D9D8D1' },
    text: {
      primary: '#131311',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Montserrat"',
    },
    fontFamily: '"Montserrat", "Lato", "Inter"',
    subtitle1: {
      fontFamily: '"Inter"',
    },
    body1: {
      fontFamily: '"Inter"',
    },
    body2: {
      fontFamily: '"Lato"',
    },
  },
});