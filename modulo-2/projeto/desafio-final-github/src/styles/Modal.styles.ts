import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${(props) => props.theme.spacing.md};
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 95vh;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.xl};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  h2 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    word-break: break-word;
  }

  @media (max-width: 768px) {
    padding: 1.25rem ${(props) => props.theme.spacing.lg};

    h2 {
      font-size: 1.25rem;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.textMuted};
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  transition: background-color 0.2s, color 0.2s;
  flex-shrink: 0;
  margin-left: ${(props) => props.theme.spacing.md};

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ModalBody = styled.div`
  padding: ${(props) => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.lg};
    gap: 1.25rem;
  }
`;

export const ModalField = styled.div`
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
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    word-break: break-word;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    text-decoration: none;
    word-break: break-all;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }
`;
