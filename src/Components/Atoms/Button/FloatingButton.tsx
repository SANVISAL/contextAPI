import React, { ReactNode } from "react";

interface FloatingButtonProps {
  children: ReactNode;
  className?: string;
  color?:
    | "neutral"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  className,
  position = "top-left",
  color = "neutral",
  onClick,
}) => {
  const ButtonPosition = (position: string) => {
    switch (position) {
      case "top-right":
        return "top-2 right-2";
      case "bottom-left":
        return "bottom-2 left-2";
      case "bottom-right":
        return "bottom-2 right-2";
      default:
        return "top-2 left-2";
    }
  };
  const FloatingButtonColor = (color: string) => {
    switch (color) {
      case "neutral":
        return "bg-[#232A33]";
      case "primary":
        return "bg-[#646EE4]";
      case "secondary":
        return "bg-[#EF47BC]";
      case "info":
        return "bg-[#00B5FF]";
      case "success":
        return "bg-[#00935F]";
      case "warning":
        return "bg-[#FFBE00]";
      case "error":
        return "bg-[#FF5861]";
      default:
        return "bg-blue-500";
    }
  };

  const getButtonPosition = ButtonPosition(position);
  const getFloatingButtonColor = FloatingButtonColor(color);

  return (
    <button
      onClick={onClick}
      className={`fixed rounded-full w-[60px] h-[60px] flex justify-center items-center ${getFloatingButtonColor} ${getButtonPosition} ${className}`}
    >
      {children}
    </button>
  );
};

export { FloatingButton };
