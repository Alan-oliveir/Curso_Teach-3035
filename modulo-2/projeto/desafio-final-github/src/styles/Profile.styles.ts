import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing.md} 5%;
  box-shadow: ${(props) => props.theme.shadows.sm};

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
  gap: ${(props) => props.theme.spacing.lg};

  img {
    width: 64px;
    height: 64px;
    animation: rotate 2s linear infinite;
  }

  p {
    font-weight: 600;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.text};
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
  padding: ${(props) => props.theme.spacing.xl}
    ${(props) => props.theme.spacing.lg};

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.lg}
      ${(props) => props.theme.spacing.md};
  }
`;

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  margin: ${(props) => props.theme.spacing.xl} 0
    ${(props) => props.theme.spacing.md};
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
  background: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: ${(props) => props.theme.spacing.xl};
  display: flex;
  gap: ${(props) => props.theme.spacing.xl};
  box-shadow: ${(props) => props.theme.shadows.md};
  border: 2px solid ${(props) => props.theme.colors.border};

  img {
    width: 100px;
    height: 100px;
    border-radius: ${(props) => props.theme.borderRadius.md};
    object-fit: cover;
  }

  .info {
    flex: 1;

    label {
      display: block;
      font-size: 0.75rem;
      color: ${(props) => props.theme.colors.textMuted};
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: ${(props) => props.theme.spacing.xs};
      letter-spacing: 0.5px;
    }

    p {
      margin-bottom: ${(props) => props.theme.spacing.md};
      color: ${(props) => props.theme.colors.text};
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
    padding: ${(props) => props.theme.spacing.lg};

    img {
      width: 90px;
      height: 90px;
    }
  }
`;

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing.lg};
  margin-bottom: ${(props) => props.theme.spacing.lg};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.md};
  }
`;

export const RepoCard = styled.article`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius.md};
  padding: ${(props) => props.theme.spacing.lg};
  border: 2px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.shadows.md};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.lg};
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
  background-color: ${(props) => props.theme.colors.background};
  padding: 0.875rem;
  border-radius: ${(props) => props.theme.borderRadius.sm};

  label {
    display: block;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.textMuted};
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: ${(props) => props.theme.spacing.sm};
    letter-spacing: 0.5px;
  }

  p {
    color: ${(props) => props.theme.colors.text};
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
  gap: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.lg};

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
  gap: ${(props) => props.theme.spacing.sm};
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  transition: background-color 0.2s, border-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.background};
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
  gap: ${(props) => props.theme.spacing.md};

  button {
    padding: 0.75rem ${(props) => props.theme.spacing.lg};
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius.sm};
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
  padding: 3rem ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 1rem;
`;
