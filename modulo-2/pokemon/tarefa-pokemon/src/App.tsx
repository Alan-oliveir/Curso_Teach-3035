import { useEffect, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { CustomThemeProvider, useTheme } from './context/ThemeContext';
import { lightTheme, darkTheme } from './styles/themes';
import {
  AppContainer,
  Header,
  Title,
  ThemeToggleButton,
  GridContainer,
  Card,
  PokemonImage,
  PokemonNumber,
  PokemonName,
  TypeBadge,
  TypesContainer,
  ImageContainer,
  LoadingSpinner
} from './components/PokemonComponents';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}

const typeColors: Record<string, string> = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC'
};

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const [details, setDetails] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(pokemon.url)
      .then(res => res.json())
      .then(data => {
        setDetails(data);
        setLoading(false);
      });
  }, [pokemon.url]);

  if (loading) {
    return (
      <Card style={{ minHeight: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <LoadingSpinner />
      </Card>
    );
  }

  if (!details) return null;

  return (
    <Card>
      <ImageContainer>
        <PokemonImage src={details.sprites.front_default} alt={details.name} />
      </ImageContainer>
      
      <PokemonNumber>
        #{details.id.toString().padStart(3, '0')}
      </PokemonNumber>
      
      <PokemonName>{details.name}</PokemonName>
      
      <TypesContainer>
        {details.types.map((type) => (
          <TypeBadge
            key={type.type.name}
            typeColor={typeColors[type.type.name] || '#777'}
          >
            {type.type.name}
          </TypeBadge>
        ))}
      </TypesContainer>
    </Card>
  );
}

function PokedexContent() {
  const { mode, toggleTheme } = useTheme();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
        setLoading(false);
      });
  }, []);

  const currentThemeObject = mode === 'light' ? lightTheme : darkTheme;

  return (
    <SCThemeProvider theme={currentThemeObject}>
      <AppContainer>
        <Header>
          <Title>⚡ PokéDex Interativa</Title>
          <ThemeToggleButton onClick={toggleTheme}>
            {mode === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
          </ThemeToggleButton>
        </Header>

        {loading ? (
          <div style={{ textAlign: 'center', color: 'white', fontSize: '1.5em' }}>
            Carregando Pokémons...
          </div>
        ) : (
          <GridContainer>
            {pokemons.map(pokemon => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </GridContainer>
        )}
      </AppContainer>
    </SCThemeProvider>
  );
}

export default function App() {
  return (
    <CustomThemeProvider>
      <PokedexContent />
    </CustomThemeProvider>
  );
}
