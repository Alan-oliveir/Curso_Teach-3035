import { useEffect } from "react";
import * as S from "../styles/Modal.styles";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  visibility: string;
  language: string | null;
  description: string | null;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  repository: Repository | null;
}

export default function Modal({ isOpen, onClose, repository }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !repository) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.ModalOverlay
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleOverlayClick}
    >
      <S.ModalContent>
        <S.ModalHeader>
          <h2 id="modal-title">{repository.name}</h2>
          <S.CloseButton onClick={onClose} aria-label="Fechar modal">
            &times;
          </S.CloseButton>
        </S.ModalHeader>

        <S.ModalBody>
          <S.ModalField>
            <label>Link</label>
            <a
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repository.html_url}
            </a>
          </S.ModalField>

          <S.ModalField>
            <label>Privacidade</label>
            <p>{repository.visibility === "public" ? "Público" : "Privado"}</p>
          </S.ModalField>

          <S.ModalField>
            <label>Linguagem</label>
            <p>{repository.language || "Não especificada"}</p>
          </S.ModalField>

          <S.ModalField>
            <label>Descrição</label>
            <p>{repository.description || "Sem descrição disponível."}</p>
          </S.ModalField>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
