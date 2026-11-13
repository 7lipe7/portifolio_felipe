import { useEffect, useCallback } from "react";
import "./Lightbox.css";

/**
 * Lightbox reutilizável para visualização de imagens em tela cheia.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Se o lightbox está aberto
 * @param {string[]} props.images - Lista de URLs/imports das imagens
 * @param {number} props.currentIndex - Índice da imagem atualmente exibida
 * @param {() => void} props.onClose - Função chamada ao fechar
 * @param {() => void} props.onPrev - Função chamada para imagem anterior
 * @param {() => void} props.onNext - Função chamada para próxima imagem
 */
export default function Lightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const handleBackdropClick = (e) => {
    // Fecha apenas se clicar no backdrop (fora do conteúdo da imagem)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="lightbox-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem em tela cheia"
    >
      <button
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Fechar visualizador de imagem"
      >
        &times;
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={onPrev}
            aria-label="Imagem anterior"
          >
            &#10094;
          </button>
        )}

        <img
          className="lightbox-img"
          src={images[currentIndex]}
          alt="Visualização ampliada da imagem do projeto"
          loading="lazy"
          decoding="async"
        />

        {images.length > 1 && (
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={onNext}
            aria-label="Próxima imagem"
          >
            &#10095;
          </button>
        )}

        {images.length > 1 && (
          <span className="lightbox-counter" aria-hidden="true">
            {currentIndex + 1} / {images.length}
          </span>
        )}
      </div>
    </div>
  );
}
