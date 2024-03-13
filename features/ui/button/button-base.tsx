import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button-base.module.scss";

export function ButtonBase(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={classNames(styles.button, props.className)} />
  );
}
