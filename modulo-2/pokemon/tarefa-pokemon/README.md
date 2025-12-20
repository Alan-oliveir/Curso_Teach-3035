# PokéDex: Context API + Styled Components

Este projeto une as **Tarefas 5 e 6** do curso, focando no gerenciamento de temas globais e no consumo de APIs externas com estilização moderna via CSS-in-JS.

## Tarefas Implementadas

- **Tarefa 5 (Theme Switcher)**: Criação de um sistema de temas (Claro/Escuro) utilizando Context API. O estado do tema é compartilhado por toda a aplicação, permitindo que qualquer componente reaja à mudança de cores.
- **Tarefa 6 (PokeAPI & Styled Components)**: Consumo da API pública PokeAPI para listar os Pokémons em formato de cards. A interface é totalmente responsiva e construída utilizando a biblioteca Styled Components.

## Versão 2.0 - Melhorias Implementadas

Após a versão inicial, implementei melhorias significativas para tornar a aplicação mais completa:

### Novos Recursos:
- **Imagens dos Pokémons**: Cards agora exibem os sprites oficiais carregados dinamicamente da PokeAPI
- **Sistema de Tipos**: Badges coloridas mostrando os tipos de cada Pokémon (Fogo, Água, Elétrico, etc.)
- **Persistência de Tema**: O tema é salvo no LocalStorage
- **Animações Aprimoradas**: Efeitos de hover mais suaves e transições polidas
- **Gradientes Modernos**: Backgrounds com gradientes para cada tema

## Desafios Técnicos e Soluções

Nesta etapa, o nível de complexidade aumentou e exigiu soluções mais avançadas:

### 1. Sincronização de Provedores (Theming)

Um dos maiores desafios foi entender a necessidade de dois Provedores trabalhando juntos.

**Solução**: Implementei um `CustomThemeProvider` (meu contexto) para gerenciar a lógica da string `'light' | 'dark'` e o `ThemeProvider` do Styled Components para injetar as cores reais nos componentes. Isso permitiu que o CSS acessasse o tema através de `props.theme`.

### 2. Tipagem de Temas no TypeScript

Ao usar Styled Components com TypeScript, o compilador não reconhece as propriedades do tema por padrão.

**Solução**: Defini uma `interface ThemeProps` para os objetos de cores, garantindo que o VS Code ofereça autocompletar ao escrever os estilos.

## Tecnologias e Bibliotecas

- React (Hooks e Context API)
- Styled Components (CSS-in-JS)
- TypeScript
- PokeAPI 
- LocalStorage

## Instalação e Execução

Como este projeto utiliza uma biblioteca externa de estilos, é necessário instalá-la antes de rodar:

### 1. Instale as dependências:
```bash
npm install styled-components
npm install -D @types/styled-components
```

### 2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Estrutura do Projeto
```
src/
├── components/
│   └── PokemonComponents.tsx  # Componentes estilizados
├── context/
│   └── ThemeContext.tsx       # Context API para temas
├── styles/
│   └── themes.ts              # Definição dos temas
├── App.tsx                    # Componente principal
└── main.tsx                   # Ponto de entrada
```

## Funcionalidades

- ✅ Alternância entre tema claro e escuro
- ✅ Persistência da preferência de tema
- ✅ Consumo de API REST (PokeAPI)
- ✅ Exibição de imagens, tipos e IDs dos Pokémons
- ✅ Cards responsivos com CSS Grid
- ✅ Animações e transições suaves
- ✅ Sistema de cores por tipo de Pokémon
