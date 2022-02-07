import propTypes from "prop-types";
import styles from "./Button.modules.css";

function Button({ text }){
    return <button className={styles.btn}>{text}</button>
}

Button.propTypes={
    text:propTypes.string.isRequired,
}
export default Button;