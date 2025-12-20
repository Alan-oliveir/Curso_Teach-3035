# To-Do List Avançado - Context API & Persistência

Este projeto é da **Tarefa 4**, onde explorei o gerenciamento de estado global no React utilizando a Context API. A aplicação permite o controle de uma lista de tarefas, garantindo que os dados não sejam perdidos ao recarregar a página.

## Novas Funcionalidades

Além dos requisitos básicos, implementei melhorias para tornar a aplicação mais robusta:

- **Persistência com LocalStorage**: As tarefas são salvas automaticamente no navegador, permitindo que o usuário feche a aba e retorne sem perder seu progresso.
- **Painel de Estatísticas**: Um componente de resumo que exibe em tempo real o número total de tarefas, quantas foram concluídas e quantas ainda estão pendentes.

## Desafios Técnicos e Aprendizados

### 1. Hierarquia da Context API

O maior desafio inicial foi compreender que o hook `useTodo` só funciona em componentes que são filhos do `TodoProvider`.

**Solução**: Reestruturei o `App.tsx` para que o Provedor envolvesse os componentes de entrada, lista e estatísticas, permitindo que todos "ouvissem" o mesmo estado global.

### 2. Sincronização com LocalStorage

Garantir que o estado do React e o armazenamento do navegador estivessem sempre sincronizados.

**Solução**: Criei uma função `saveTodos` que centraliza tanto a atualização do estado quanto a gravação no `localStorage`, garantindo consistência. Além disso, usei uma função inicializadora no `useState` para carregar os dados salvos na primeira renderização.

## Tecnologias

- React (Context API, Hooks)
- TypeScript
- LocalStorage (Persistência de dados)
- Vite

## Como usar

1. **Adicionar**: Digite o nome da tarefa no campo superior e pressione "Adicionar" ou Enter.
2. **Concluir**: Clique no texto da tarefa ou no checkbox para marcar como realizada.
3. **Excluir**: Clique no botão "Excluir" para remover permanentemente a tarefa.
4. **Acompanhar**: Observe os números no painel inferior para gerenciar suas tarefas.

## 🔧 Como Rodar o Projeto

1. Clone este repositório
2. Navegue até a pasta do projeto:
```bash
   cd todo-list
```
3. Instale as dependências:
```bash
   npm install
```
4. Inicie o servidor:
```bash
   npm run dev
```

## Estrutura do Projeto
```
src/
├── context/
│   └── TodoContext.tsx    # Context API com lógica de estado
├── App.tsx                # Componente principal
├── App.css                # Estilos da aplicação
└── main.tsx               # Ponto de entrada
```

## Funcionalidades Implementadas

- ✅ Adicionar tarefas
- ✅ Excluir tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Persistência de dados com LocalStorage
- ✅ Painel de estatísticas
