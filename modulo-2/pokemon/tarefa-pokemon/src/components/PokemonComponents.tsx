import styled from 'styled-components';

export const AppContainer = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  min-height: 100vh;
  padding: 40px 20px;
  transition: all 0.3s ease;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 3em;
  margin: 0 0 20px 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  font-weight: 800;
`;

export const ThemeToggleButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.buttonHover};
    transform: scale(1.05);
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 8px 16px ${props => props.theme.colors.shadow};
  border: 2px solid ${props => props.theme.colors.cardBorder};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px ${props => props.theme.colors.shadow};
  }
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  image-rendering: pixelated;
`;

export const PokemonNumber = styled.div`
  background: ${props => props.theme.colors.cardBorder};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 10px;
`;

export const PokemonName = styled.h3`
  color: ${props => props.theme.colors.text};
  margin: 10px 0;
  text-transform: capitalize;
  font-size: 1.3em;
  font-weight: 700;
`;

export const TypeBadge = styled.span<{ typeColor: string }>`
  background: ${props => props.typeColor};
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  display: inline-block;
  margin: 2px;
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ImageContainer = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${props => props.theme.colors.cardBorder};
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;