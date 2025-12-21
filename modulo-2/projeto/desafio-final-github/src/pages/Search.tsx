import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoWutech from "../assets/logo_home.png";
import loadingImg from "../assets/loading.png";
import * as S from "../styles/Search.styles";

export default function Search() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isApiError, setIsApiError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (error) {
      setError("");
      setIsApiError(false);
    }
  };

  const handleSearch = async () => {
    if (isSearching) return; // Previne múltiplas requisições
    setIsSearching(true);

    const trimmedUsername = username.trim();

    if (trimmedUsername === "") {
      setError("Por favor, insira um nome de usuário.");
      setIsApiError(false); // Erro de validação de entrada.
      return;
    }

    // Validação de formato (GitHub usernames: alfanuméricos e hifens)
    const usernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    if (!usernameRegex.test(trimmedUsername)) {
      setError(
        "Nome de usuário inválido. Use apenas letras, números e hifens."
      );
      setIsApiError(false); // Erro de validação de formato de entrada.
      return;
    }

    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        setIsApiError(true); // Erro de API
        if (response.status === 404) {
          setError(
            "Usuário não encontrado. Verifique o nome de usuário e tente novamente."
          );
        } else if (response.status === 403) {
          setError(
            "Limite de requisições excedido. Tente novamente mais tarde."
          );
        } else {
          setError("Erro ao buscar o usuário. Tente novamente mais tarde.");
        }
        setLoading(false);
        return;
      }

      navigate(`/profile/${username}`, { state: { username } });
    } catch (_err) {
      setIsApiError(true); // Erro de API
      setError("Erro de conexão. Verifique sua internet.");
      setLoading(false);
    }

    setIsSearching(false);
  };

  return (
    <S.SearchContainer>
      <S.LogoSide>
        <img src={logoWutech} alt="Logo Wutech" />
      </S.LogoSide>

      <S.FormSide>
        {loading ? (
          <S.LoadingView>
            <img src={loadingImg} alt="Carregando" />
            <p>Carregando...</p>
          </S.LoadingView>
        ) : (
          <>
            {isApiError && error ? (
              <S.ErrorAlert>
                <div className="error-content">
                  <p>{error}</p>
                </div>
                <button
                  className="close-error"
                  onClick={() => {
                    setError("");
                    setIsApiError(false);
                  }}
                />
              </S.ErrorAlert>
            ) : (
              <S.Title>Entrar</S.Title>
            )}

            <S.InputGroup>
              <S.Label>Usuário</S.Label>
              <S.Input
                type="text"
                placeholder="Digite aqui seu usuário do Github"
                value={username}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                disabled={loading}
              />
            </S.InputGroup>

            {!isApiError && error && <S.ErrorMessage>{error}</S.ErrorMessage>}

            <S.Button onClick={handleSearch} disabled={loading}>
              Entrar
            </S.Button>
          </>
        )}
      </S.FormSide>
    </S.SearchContainer>
  );
}
