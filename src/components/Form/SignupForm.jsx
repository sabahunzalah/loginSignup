import React from "react";
import Button from "../Button/Button";
import FieldComponent from "../Field/FieldComponent";
import styles from  './form.module.css'

const SignupForm = () => {
  return (
    <div className={styles.parent}>
      <h2>Sign Up</h2>
      <p>
        Already have an account <a href="">Login here ?</a>
      </p>
      <FieldComponent
        name="username"
        placeholder="Enter your name here"
        labelName="Name"
        type="text"
      />
      <FieldComponent
        name="email"
        placeholder="Enter your Email id here"
        labelName="Email Id"
        type="Email"
      />{" "}
      <FieldComponent
        name="password"
        placeholder="Enter your Password here"
        labelName="Password"
        type="password"
      />
      <div className={styles.checkbox}>
        <input type="checkbox" name="" id="" />{" "}
        <p>By Signing up you agree to receive updates and speacial Offers</p>
      </div>
      <div className={styles.btnDiv}>
      <Button name="Submit"/>

      </div>
    </div>
  );
};

export default SignupForm;
