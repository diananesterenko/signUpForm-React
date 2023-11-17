import { useState } from "react";
import classNames from "classnames";
import SignUpFormItem from "./signUpFormItem";
import styles from "./SignUpForm.module.scss";

function SignUpForm() {
  const SIGNUP_FORM_REG_EXP = {
    name: /^\w+$/,
    email: /^.+@.+$/,
    password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/,
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfim, setPasswordConfim] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [nameClassName, setNameClassName] = useState(styles.formInput);
  const [emailClassName, setEmailClassName] = useState(styles.formInput);
  const [passwordClassName, setPasswordClassName] = useState(styles.formInput);
  const [passwordConfimClassName, setPasswordConfimClassName] = useState(
    styles.formInput
  );

  const handleNameChange = function ({ target: { value } }) {
    setName(value);
    setNameClassName(
      classNames(styles.formInput, {
        [styles.valid]: SIGNUP_FORM_REG_EXP.name.test(name),
        [styles.invalid]: !SIGNUP_FORM_REG_EXP.name.test(name),
      })
    );
  };
  const handleEmailChange = function ({ target: { value } }) {
    setEmail(value);
    setEmailClassName(
      classNames(styles.formInput, {
        [styles.valid]: SIGNUP_FORM_REG_EXP.email.test(email),
        [styles.invalid]: !SIGNUP_FORM_REG_EXP.email.test(email),
      })
    );
  };
  const handlePasswordChange = function ({ target: { value } }) {
    setPassword(value);
    setPasswordClassName(
      classNames(styles.formInput, {
        [styles.valid]: SIGNUP_FORM_REG_EXP.password.test(password),
        [styles.invalid]: !SIGNUP_FORM_REG_EXP.password.test(password),
      })
    );
  };
  const handlePasswordConfimChange = function ({ target: { value } }) {
    setPasswordConfim(value);
    setPasswordConfimClassName(
      classNames(styles.formInput, {
        [styles.valid]:
          SIGNUP_FORM_REG_EXP.password.test(passwordConfim) &&
          passwordConfim === password,
        [styles.invalid]:
          !SIGNUP_FORM_REG_EXP.password.test(passwordConfim) ||
          passwordConfim !== password,
      })
    );
  };
  const handleAgreeChange = function ({ target: { value } }) {
    setIsAgree(!isAgree);
  };
  const handleSubmit = function (e) {
    e.preventDefault();
    if (isAgree) {
      setName(" ");
      setEmail(" ");
      setPassword(" ");
      setPasswordConfim(" ");
      setIsAgree(false);
      alert("Thank you for registration");
    }
  };
  const handleVisibilityChange = function () {
    setIsVisible(!isVisible);
  };

  return (
    <SignUpFormItem
      nameClassName={nameClassName}
      emailClassName={emailClassName}
      passwordClassName={passwordClassName}
      passwordConfimClassName={passwordConfimClassName}
      name={name}
      email={email}
      password={password}
      passwordConfim={passwordConfim}
      isAgree={isAgree}
      isVisible={isVisible}
      handleAgreeChange={handleAgreeChange}
      handleEmailChange={handleEmailChange}
      handleNameChange={handleNameChange}
      handlePasswordChange={handlePasswordChange}
      handlePasswordConfimChange={handlePasswordConfimChange}
      handleSubmit={handleSubmit}
      handleVisibilityChange={handleVisibilityChange}
    />
  );
}

export default SignUpForm;
