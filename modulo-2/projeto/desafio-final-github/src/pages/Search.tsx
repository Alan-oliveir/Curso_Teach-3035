import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoWutech from '../assets/logo.png';
import * as S from '../styles/Search.styles';

export default function Search() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        if (error) setError('');
    };

    const handleSearch = async() => {
        if (username.trim() === '') {
            setError('Por favor, insira um nome de usuário.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);

            if (!response.ok) {
                if (response.status === 404) {
                    setError('Usuário não encontrado. Verifique o nome de usuário e tente novamente.');
                } else {
                    setError('Erro ao buscar o usuário. Tente novamente mais tarde.');
                }
                setLoading(false);
                return;
            }

            navigate(`/profile/${username}`, { state: { username } });

        } catch (err) {
            setError('Erro de conexão. Verifique sua internet e tente novamente.');
            setLoading(false);  
        }        
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <S.SearchContainer>
            <S.LogoSide>
                <img src={logoWutech} alt="Logo Wutech" />
            </S.LogoSide>
            <S.FormSide>
                <S.Title>Entrar</S.Title>
                <S.InputGroup>
                    <S.Label>Usuário</S.Label>
                    <S.Input
                        type="text"
                        placeholder="Digite aqui seu usuário do Github"
                        value={username}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        disabled={loading}
                    />
                </S.InputGroup>
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                <S.Button onClick={handleSearch} disabled={loading}>
                    {loading ? 'Carregando...' : 'Entrar'}
                </S.Button>
            </S.FormSide>
        </S.SearchContainer>
    );
}
