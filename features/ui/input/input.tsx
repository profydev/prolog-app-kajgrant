import { useState } from "react";
import styles from "./input.module.scss";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: string;
  focused?: boolean;
  hint?: string;
  error?: boolean;
}

export function Input({
  placeholder = "",
  disabled = false,
  icon,
  hint,
  error,
  label,
}: InputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <label className={styles.label} data-error={error} data-disabled={disabled}>
      {label}
      <span className={styles.inputContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {icon && <img src={icon} alt="" className={styles.inputIcon} />}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={styles.input}
        />
        {error && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/icons/error-alert.svg"
            alt="Error"
            className={styles.errorIcon}
          />
        )}
      </span>
      {error ? (
        <p className={styles.error}>This is an error message.</p>
      ) : hint ? (
        <p className={styles.hint}>{hint}</p>
      ) : null}
    </label>
  );
}
