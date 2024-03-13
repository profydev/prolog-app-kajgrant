import React from "react";
import styles from "./alert.module.scss";
import {
  Button,
  ButtonIcon,
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from "../button";

type AlertProps = {
  context: string;
  refetchFn: () => void;
};

export function Alert({ context, refetchFn }: AlertProps) {
  return (
    <div className={styles.container} data-cy="alert">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <ButtonIcon src="/icons/alert-circle.svg" />
      <div className={styles.alertMessage}>
        There was a problem while loading the {context} data
      </div>
      <Button
        type="button"
        size={ButtonSize.small}
        variant={ButtonVariant.empty}
        color={ButtonColor.error}
        onClick={refetchFn}
      >
        Try again
        <ButtonIcon src="/icons/arrow-right.svg" />
      </Button>
    </div>
  );
}
