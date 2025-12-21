import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      error: string;
      loading: string;
      background: string;
      border: string;
      textMuted: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
