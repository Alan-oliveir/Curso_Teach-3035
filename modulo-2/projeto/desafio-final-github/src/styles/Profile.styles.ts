import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #fff;
  padding: 1rem 5%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  img {
    height: 40px;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FullPageLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh; // Centraliza no meio da área de conteúdo
  gap: 1.5rem;

  img {
    width: 64px;
    height: 64px;
    animation: rotate 2s linear infinite;
  }

  p {
    font-weight: 600;
    font-size: 1.25rem;
    color: #333;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const SectionTitle = styled.h2`
  color: #333;
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;

  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const UserCard = styled.section`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 2px solid #e3e7eb;

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
  }

  .info {
    flex: 1;

    label {
      display: block;
      font-size: 0.75rem;
      color: #999;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 0.25rem;
      letter-spacing: 0.5px;
    }

    p {
      margin-bottom: 1rem;
      color: #333;
      font-weight: 400;
      font-size: 0.95rem;
      line-height: 1.5;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;

    img {
      width: 90px;
      height: 90px;
    }
  }
`;

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const RepoCard = styled.article`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  border: 2px solid #e3e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(5, 71, 138, 0.15);
  }

  h3 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    gap: 0.875rem;

    h3 {
      font-size: 0.95rem;
    }
  }
`;

export const RepoCardField = styled.div`
  background-color: #f5f5f5;
  padding: 0.875rem;
  border-radius: 4px;

  label {
    display: block;
    font-size: 0.75rem;
    color: #999;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    letter-spacing: 0.5px;
  }

  p {
    color: #333;
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 0;
    word-break: break-word;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.875rem;
    text-decoration: none;
    word-break: break-all;
    transition: opacity 0.2s;
    display: block;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 0.75rem;

    label {
      font-size: 0.7rem;
    }

    p,
    a {
      font-size: 0.8rem;
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const PaginationInfo = styled.span`
  color: #666;
  font-size: 0.875rem;
`;

export const PaginationButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  transition: background-color 0.2s, border-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #f5f5f5;
    border-color: ${(props) => props.theme.colors.primary};
  }

  svg {
    width: 16px;
    height: 16px;
    color: #666;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.25rem;
  font-weight: 500;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${(props) => props.theme.colors.error};
  font-size: 1.25rem;
  font-weight: 500;
  gap: 1rem;

  button {
    padding: 0.75rem 1.5rem;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #666;
  font-size: 1rem;
`;
