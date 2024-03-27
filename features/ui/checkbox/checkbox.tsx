import { useRef, useEffect } from "react";
import styles from "./checkbox.module.scss";
import classNames from "classnames";

export enum CheckboxSize {
  small = "sm",
  medium = "md",
}

type CheckboxProps = {
  label?: string;
  size?: CheckboxSize;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?: (checked: boolean) => void;
};

export function Checkbox({
  label,
  size,
  onChange,
  checked,
  indeterminate,
  disabled,
  ...props
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate || false;
    }
  }, [indeterminate]);

  const handleChange = () => {
    const newChecked = !checked;
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label
      className={classNames(styles.formControl, {
        [styles.disabledLabel]: disabled,
      })}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        ref={checkboxRef}
        disabled={disabled}
        {...props}
        className={classNames(styles.checkboxInput, styles[size || ""], {
          [styles.indeterminate]: indeterminate,
        })}
      />
      {label}
    </label>
  );
}
