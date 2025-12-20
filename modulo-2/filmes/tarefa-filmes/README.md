# Catálogo de Filmes - React + TypeScript

Este projeto foi desenvolvido como parte de um conjunto de tarefas práticas de Frontend. Ele consiste em uma interface de catálogo que permite pesquisar filmes e selecionar favoritos através de uma lista dinâmica.

## Tarefas Implementadas

- **Tarefa 2**: Exibição dos dados de um arquivo JSON em formato de tabela, com a implementação de um campo de busca que filtra os filmes pelo nome em tempo real.
- **Tarefa 3**: Adição de uma propriedade `checked` via código para cada item, permitindo a seleção de filmes através de checkboxes e exibindo uma mensagem de confirmação para o usuário.

## Desafios Técnicos e Soluções

Durante o desenvolvimento, enfrentei alguns obstáculos comuns no ecossistema React/TypeScript que foram resolvidos da seguinte forma:

### 1. TypeScript e Importação de JSON

Ao importar o arquivo `filmes.json`, o TypeScript não reconhecia automaticamente as propriedades dos objetos.

**Solução**: Foi criada uma `interface` para definir a estrutura dos dados e utilizado o Type Assertion (`as FilmeOriginal[]`) para garantir que o estado inicial fosse tipado corretamente, permitindo o uso de métodos como `.map()` e `.filter()`.

### 2. Estilização e Importação de CSS

Em um primeiro momento, as alterações no `App.css` não estavam refletindo na tela.

**Solução**: Identifiquei a falta do `import './App.css'` dentro do arquivo `App.tsx`. Após a importação, os estilos passaram a ser aplicados corretamente.

### 3. Conflitos de CSS (index.css vs App.css)

Houve um conflito visual onde as regras globais do `index.css` (geradas pelo Vite) estavam interferindo no layout da tabela e centralização dos elementos.

**Solução**: Exclui o arquivo `index.css` e utilizei classes no `App.css`.

## Tecnologias Utilizadas

- React
- TypeScript
- Vite

## Como Rodar o Projeto

1. Clone este repositório
2. Navegue até a pasta do projeto:
```bash
   cd tarefa-filmes
```
3. Instale as dependências:
```bash
   npm install
```
4. Inicie o servidor:
```bash
   npm run dev
```
