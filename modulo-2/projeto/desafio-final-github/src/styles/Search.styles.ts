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
  margin-bottom: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.text};
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  transition: border-color 0.3s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.error};
  font-size: 0.875rem;
  margin-top: 0.5rem;
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
  padding: 0.875rem 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;
  margin-top: 1rem;

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

export const ErrorAlert = styled.div`
  background-image: url(${errorMessageBg});

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  max-width: 400px;

  height: 130px;
  margin-bottom: 1rem;
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
    margin-bottom: 0.5rem;
  }
`;
