import React from "react";
import styles from "./alert.module.scss";
import { Button } from "../button";

type AlertProps = {
  context: string;
  refetchFn: () => void;
};

export function Alert({ context, refetchFn }: AlertProps) {
  return (
    <div className={styles.container} data-cy="alert">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.alertIcon}
        src="/icons/alert-circle.svg"
        alt="alert icon"
      />
      <div className={styles.alertMessage}>
        There was a problem while loading the {context} data
      </div>
      <Button className={styles.button} onClick={refetchFn}>
        Try again
      </Button>
      <img
        className={styles.buttonArrow}
        src="/icons/arrow-right.svg"
        alt="try again"
      />
    </div>
  );
}
