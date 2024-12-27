import React from "react";
import SignupForm from "../../components/Form/SignupForm";
import image from "../../assets/images/image1-removebg-preview.png";
import styles from "./signupPage.module.css";

const SignUp = () => {
  return (
    <div className={styles.mainDiv}>
       <div className={styles.subDiv}>
        <SignupForm className={styles.textdiv} />
        <img src={image} alt="" className={styles.img} />
      </div>
   
    </div>
     
  );
};

export default SignUp;
