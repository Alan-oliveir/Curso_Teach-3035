import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logoWutech from "../assets/logo_profile.png";
import Modal from "../components/Modal";
import * as S from "../styles/Profile.styles";

interface UserData {
  avatar_url: string;
  name: string;
  bio: string;
}

interface Repository {
  id: number;
  name: string;
  html_url: string;
  visibility: string;
  language: string | null;
  description: string | null;
}

const ITEMS_PER_PAGE = 9; // 3 colunas x 3 linhas = 9 cards por página

export default function Profile() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();

  const [user, setUser] = useState<UserData | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Estados para controle do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

  // Estados para paginação
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!username) {
      navigate("/");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error("Erro ao buscar dados do GitHub");
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError("Erro ao carregar as informações do usuário.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, navigate]);

  const handleCardClick = (repo: Repository) => {
    setSelectedRepo(repo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRepo(null);
  };

  // Cálculos de paginação
  const totalPages = Math.ceil(repos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentRepos = repos.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) {
    return <S.LoadingWrapper>Carregando...</S.LoadingWrapper>;
  }

  if (error) {
    return (
      <S.ErrorWrapper>
        <p>{error}</p>
        <button onClick={() => navigate("/")}>Voltar para busca</button>
      </S.ErrorWrapper>
    );
  }

  return (
    <S.ProfileContainer>
      <S.Header>
        <img src={logoWutech} alt="Logo Wutech" onClick={() => navigate("/")} />
      </S.Header>

      <S.Content>
        <S.SectionTitle>Informações do Perfil</S.SectionTitle>
        <S.UserCard>
          <img src={user?.avatar_url} alt={user?.name || "Usuário"} />
          <div className="info">
            <label>Nome</label>
            <p>{user?.name || "Não informado"}</p>
            <label>Bio</label>
            <p>{user?.bio || "Sem biografia disponível."}</p>
          </div>
        </S.UserCard>

        <S.SectionTitle>Repositórios</S.SectionTitle>

        {repos.length === 0 ? (
          <S.EmptyState>Nenhum repositório encontrado.</S.EmptyState>
        ) : (
          <>
            <S.RepoGrid>
              {currentRepos.map((repo) => (
                <S.RepoCard key={repo.id} onClick={() => handleCardClick(repo)}>
                  <h3>{repo.name}</h3>
                  <p className="description">
                    {repo.description || "Sem descrição."}
                  </p>
                </S.RepoCard>
              ))}
            </S.RepoGrid>

            {totalPages > 1 && (
              <S.PaginationContainer>
                <S.PaginationInfo>
                  {startIndex + 1} de {repos.length}
                </S.PaginationInfo>
                <S.PaginationButtons>
                  <S.PaginationButton
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </S.PaginationButton>
                  <S.PaginationButton
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </S.PaginationButton>
                </S.PaginationButtons>
              </S.PaginationContainer>
            )}
          </>
        )}
      </S.Content>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        repository={selectedRepo}
      />
    </S.ProfileContainer>
  );
}
