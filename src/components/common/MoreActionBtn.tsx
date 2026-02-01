import { MoreHorizontal } from "lucide-react";

export interface CardMenuButtonProps {
  onClick?: () => void;
  label?: string;
}

export function CardMenuButton({
  onClick,
  label = "More options",
}: CardMenuButtonProps) {
  return (
    <button
      className="icon-btn"
      aria-label={label}
      onClick={onClick}
      type="button"
    >
      <MoreHorizontal size={18} />
    </button>
  );
}
