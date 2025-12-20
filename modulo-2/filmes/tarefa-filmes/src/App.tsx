import { useState, useRef } from 'react'
import './App.css'
import filmesIniciais from './data/filmes.json'

interface FilmeOriginal {
  id: number;
  nome: string;
  genero: string;
  imagem: string;
}

interface Filme extends FilmeOriginal {
  checked: boolean; // Propriedade que não existe no JSON inicial pedida na tarefa 3
}

export default function App() {
  const [filmes, setFilmes] = useState<Filme[]>(
    (filmesIniciais as FilmeOriginal[]).map(filme => ({ ...filme, checked: false }))
  );

  const [mensagem, setMensagem] = useState('');
  const [busca, setBusca] = useState('');
  const timeoutRef = useRef<number | null>(null);

  const filmesFiltrados = filmes.filter(filme => 
    filme.nome.toLowerCase().includes(busca.toLowerCase())
  );

  // Função para atualizar o checkbox para cada filme selecionado na tarefa 3
  const handleToggle = (id: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const novosFilmes = filmes.map(filme => {
      if (filme.id === id) {
        const novoStatus = !filme.checked;  

        if (novoStatus) {
          setMensagem(`O filme ${filme.nome} foi selecionado`);
          timeoutRef.current = window.setTimeout(() => {
            setMensagem('');
          }, 5000);
        } else {
          setMensagem(''); 
        }
        
        return { ...filme, checked: novoStatus };
      }

      return filme;
    });

    setFilmes(novosFilmes);
  };

return (
    <div className="container">
      <h1>Lista de Filmes</h1>

      {/* Campo de Busca (Tarefa 2) */}
      <div className="busca-container">
        <input 
          type="text" 
          placeholder="Buscar filme..." 
          className="busca-input"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>
      
      {mensagem && (
        <div className="mensagem-selecao">
          <strong>{mensagem}</strong>
        </div>
      )}
      
      <table className="tabela-filmes">
        <thead>
          <tr>
            <th>Capa</th>
            <th>Título</th>
            <th>Gênero</th>
            <th>Selecionar</th>
          </tr>
        </thead>
        <tbody>
          {/* lista de filmes filtrados */}
          {filmesFiltrados.map(filme => (
            <tr key={filme.id} className="linha-filme">
              <td>
                <img src={filme.imagem} alt={filme.nome} className="capa-filme" />
              </td>
              <td>{filme.nome}</td>
              <td>{filme.genero}</td>
              <td>
                <input 
                  type="checkbox" 
                  checked={filme.checked}
                  onChange={() => handleToggle(filme.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Caso a busca não encontre o filme */}
      {filmesFiltrados.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#888' }}>
          Nenhum filme encontrado para "{busca}"
        </p>
      )}
    </div>
  )
}
