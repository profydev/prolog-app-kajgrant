import React, { ButtonHTMLAttributes } from "react";
import { ButtonBase } from "./button-base";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  small = "sm",
  medium = "md",
  large = "lg",
  xlarge = "xlg",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  error = "error",
}

export enum ButtonVariant {
  default = "default",
  empty = "empty",
  iconOnly = "iconOnly",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
};

export function Button({
  className,
  size = ButtonSize.medium,
  color = ButtonColor.primary,
  variant = ButtonVariant.default,
  ...props
}: ButtonProps) {
  return (
    <ButtonBase
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
