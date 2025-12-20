export interface ThemeProps {
  colors: {
    background: string;
    text: string;
    cardBackground: string;
    primary: string;
    cardBorder: string;
    shadow: string;
    buttonHover: string;
  }
}

export const lightTheme: ThemeProps = {
  colors: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    text: '#1a1a1a',
    cardBackground: '#ffffff',
    primary: '#667eea',
    cardBorder: '#e0e0e0',
    shadow: 'rgba(0, 0, 0, 0.1)',
    buttonHover: '#5568d3'
  }
};

export const darkTheme: ThemeProps = {
  colors: {
    background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    text: '#f0f2f5',
    cardBackground: '#1e1e1e',
    primary: '#3b4cca',
    cardBorder: '#3b4cca',
    shadow: 'rgba(0, 0, 0, 0.5)',
    buttonHover: '#2d3a9f'
  }
};