import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logoWutech from "../assets/logo.png";
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

    useEffect(() => {
        if (!username) {
            navigate("/");
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setError("");

            try {
                setLoading(true);
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
    }

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
                <img src={logoWutech} alt="Logo Wutech" onClick={() => navigate('/')} />
            </S.Header>

            <S.Content>
                <S.SectionTitle>Informações do Perfil</S.SectionTitle>
                <S.UserCard>
                <img src={user?.avatar_url} alt={user?.name} />
                <div className="info">
                    <label>Nome</label>
                    <p>{user?.name || 'Não informado'}</p>
                    <label>Bio</label>
                    <p>{user?.bio || 'Sem biografia disponível.'}</p>
                </div>
                </S.UserCard>

                <S.SectionTitle>Repositórios</S.SectionTitle>
                    <S.RepoGrid>
                        {repos.length === 0 ? (
                            <p>Nenhum repositório encontrado.</p>
                        ) : (
                            repos.map(repo => (
                                <S.RepoCard 
                                    key={repo.id}
                                    onClick={() => handleCardClick(repo)}
                                >
                                    <h3>{repo.name}</h3>
                                    <p className="description">
                                        {repo.description || 'Sem descrição.'}
                                    </p>
                                </S.RepoCard>
                            ))
                        )}
                    </S.RepoGrid>
            </S.Content>

            <Modal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                repository={selectedRepo}
            />
        </S.ProfileContainer>
    );
}
