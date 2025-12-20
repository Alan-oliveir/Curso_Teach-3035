import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #fff;
  padding: 1rem 5%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  img { height: 40px; cursor: pointer; }
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

export const SectionTitle = styled.h2`
  color: #333;
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
`;

export const UserCard = styled.section`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);

  img { width: 120px; height: 120px; border-radius: 12px; }

  .info {
    label { font-size: 0.75rem; color: #999; font-weight: 600; text-transform: uppercase; }
    p { margin-bottom: 1rem; color: #333; font-weight: 500; }
  }

  @media (max-width: 768px) { flex-direction: column; align-items: center; text-align: center; }
`;

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const RepoCard = styled.article`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  border-top: 4px solid #05478A; // Cor primária do seu tema
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);

  h3 { color: #05478A; margin-bottom: 1rem; }
  .field {
    margin-bottom: 1rem;
    label { display: block; font-size: 0.75rem; color: #999; margin-bottom: 4px; }
    p, a { font-size: 0.9rem; color: #666; word-break: break-all; }
  }
`;

export const LoadingWrapper = styled.div`
  display: flex; justify-content: center; align-items: center; height: 100vh; color: #05478A;
`;

export const ErrorWrapper = styled(LoadingWrapper)` color: #FF4D4D; `;
