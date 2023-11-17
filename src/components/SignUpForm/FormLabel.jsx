import React from "react";
import styles from "./SignUpForm.module.scss";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

function FormLabel(props) {
  const {
    className,
    value,
    placeholder,
    name,
    title,
    handleOnChange,
    isVisible,
    handleOnClick,
  } = props;
  return (
    <label className={styles.formlabel}>
      <p>{title}</p>
      <input
        className={className}
        type={isVisible ? "text" : "password"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleOnChange}
      />
      <span className={styles.eye} onClick={handleOnClick}>
        {isVisible ? <FaEyeSlash /> : <FaRegEye />}
      </span>
    </label>
  );
}

export default FormLabel;
