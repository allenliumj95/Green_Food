import PasswordForm from "./PasswordForm";
import classes from "./ChangePassword.module.css";

const UserPassword = () => {
  return (
    <section className={classes.password}>
      <h1>Change Your Password</h1>
      <PasswordForm />
    </section>
  );
};

export default UserPassword;
