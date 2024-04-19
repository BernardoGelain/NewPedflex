import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer, ButtonIcon } from "./HomeButton.styles";

interface HomePageButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  linkTo?: string;
  isLoading?: boolean;
  title: string;
  handleSubmit?: () => void;
  icon?: string;
  bgColor?: string;
  size?: "sm" | "lg";
}

export function HomePageButton({
  title,
  isLoading,
  linkTo,
  icon,
  bgColor,
  size = "sm",
  ...rest
}: HomePageButtonProps) {
  const StyledButton = (
    <ButtonContainer
      size={size}
      bgColor={bgColor}
      disabled={isLoading}
      {...rest}
    >
      <ButtonIcon
        size={size}
        className="buttonIcon"
        src={icon}
        alt="icon vendedor"
      />
      <span className="buttonText">{title}</span>
    </ButtonContainer>
  );

  return (
    <>
      {linkTo ? (
        <Link to={linkTo} style={{ textDecoration: "none" }}>
          {StyledButton}
        </Link>
      ) : (
        StyledButton
      )}
    </>
  );
}
