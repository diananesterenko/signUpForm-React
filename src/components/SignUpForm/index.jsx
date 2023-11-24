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

  const [isPasswordConfirmTouched, setIsPasswordConfirmTouched] =
    useState(false);

  const handleNameChange = function ({ target: { value } }) {
    setName(value);
    setNameClassName(
      classNames(styles.formInput, {
        [styles.valid]: SIGNUP_FORM_REG_EXP.name.test(value),
        [styles.invalid]: !SIGNUP_FORM_REG_EXP.name.test(value),
      })
    );
  };
  const handleEmailChange = function ({ target: { value } }) {
    setEmail(value);
    setEmailClassName(
      classNames(styles.formInput, {
        [styles.valid]: SIGNUP_FORM_REG_EXP.email.test(value),
        [styles.invalid]: !SIGNUP_FORM_REG_EXP.email.test(value),
      })
    );
  };
  const handlePasswordChange = function ({ target: { value } }) {
    setPassword(value);
    setPasswordClassName(
      classNames(styles.formInput, {
        [styles.valid]: SIGNUP_FORM_REG_EXP.password.test(value),
        [styles.invalid]: !SIGNUP_FORM_REG_EXP.password.test(value),
      })
    );
  };

  const handlePasswordConfimChange = function ({ target: { value } }) {
    setPasswordConfim(value);

    setIsPasswordConfirmTouched(true);
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
      SIGNUP_FORM_REG_EXP={SIGNUP_FORM_REG_EXP}
      isPasswordConfirmTouched={isPasswordConfirmTouched}
      nameClassName={nameClassName}
      emailClassName={emailClassName}
      passwordClassName={passwordClassName}
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
