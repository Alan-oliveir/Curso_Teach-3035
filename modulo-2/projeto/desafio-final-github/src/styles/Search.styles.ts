import styled from "styled-components";

import errorMessageBg from "../assets/error_message.png";

export const SearchContainer = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoSide = styled.section`
  flex: 1.5;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 80%;
    height: auto;
  }

  @media (max-width: 768px) {
    min-height: 30vh;
  }
`;

export const FormSide = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors.secondary};

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: ${(props) => props.theme.spacing.lg};
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing.sm};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.text};
  font-size: 0.875rem;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem ${(props) => props.theme.spacing.md};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  transition: border-color 0.3s;

  &::placeholder {
    color: ${(props) => props.theme.colors.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.background};
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.error};
  font-size: 0.875rem;
  margin-top: ${(props) => props.theme.spacing.sm};
  text-align: center;
  min-height: 1.25rem;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 0.875rem ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;
  margin-top: ${(props) => props.theme.spacing.md};

  &:hover:not(:disabled) {
    background-color: #043d75;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LoadingView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const ErrorAlert = styled.div`
  background-image: url(${errorMessageBg});

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  max-width: 400px;

  height: 130px;
  margin-bottom: ${(props) => props.theme.spacing.md};
  position: relative;
  display: flex;
  align-items: center;

  .error-content {
    p {
      visibility: hidden;
    }
  }

  .close-error {
    position: absolute;
    top: 38px;
    right: 18px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: transparent;
  }

  @media (max-width: 768px) {
    height: 110px;
    margin-bottom: ${(props) => props.theme.spacing.sm};
  }
`;
