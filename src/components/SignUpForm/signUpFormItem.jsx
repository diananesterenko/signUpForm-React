import { FiEdit } from "react-icons/fi";

import styles from "./SignUpForm.module.scss";
import FormLabel from "./FormLabel";

function SignUpFormItem(props) {
  const {
    nameClassName,
    emailClassName,
    passwordClassName,
    passwordConfimClassName,
    name,
    email,
    password,
    passwordConfim,
    isAgree,
    isVisible,
    handleAgreeChange,
    handleEmailChange,
    handleNameChange,
    handlePasswordChange,
    handlePasswordConfimChange,
    handleSubmit,
    handleVisibilityChange,
  } = props;
  return (
    <div className={styles.formContainer}>
      <span className={styles.mainIcon}>
        <FiEdit />
      </span>
      <h1 className={styles.formTitle}>Create Your Account</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formlabel}>
          <p>Full Name </p>
          <input
            autoFocus
            className={nameClassName}
            type="text"
            placeholder="John Doe"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label className={styles.formlabel}>
          <p>Email adress</p>
          <input
            className={emailClassName}
            type="email"
            name="email"
            value={email}
            placeholder="johndoe@gmail.com"
            onChange={handleEmailChange}
          />
        </label>

        <FormLabel
          className={passwordClassName}
          value={password}
          placeholder={"Password"}
          name={"password"}
          title={"Password"}
          handleOnChange={handlePasswordChange}
          isVisible={isVisible}
          handleOnClick={handleVisibilityChange}
        />
        <FormLabel
          className={passwordConfimClassName}
          value={passwordConfim}
          placeholder={"Password Confirmation"}
          name={"passwordConfim"}
          title={"Password Confirmation"}
          handleOnChange={handlePasswordConfimChange}
          isVisible={isVisible}
          handleOnClick={handleVisibilityChange}
        />

        <label className={styles.formlabelCheckBox}>
          <input
            className={styles.formInputCheckBox}
            type="checkbox"
            checked={isAgree}
            onChange={handleAgreeChange}
          />
          <span></span>
          <p>I Agree All Statements In Terms Of Service</p>
        </label>
        <button className={styles.button} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpFormItem;
