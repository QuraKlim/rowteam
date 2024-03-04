import { IToast } from "features/toast/toastSlice";
import { useState } from "react";
import { Toast } from "react-bootstrap";
import styles from "./Toasts.module.scss";

export const ToastItem = ({ text, title }: IToast) => {
  const [show, setShow] = useState(true);
  return (
    <Toast
      className={styles.toast}
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <p>{title}</p>
      </Toast.Header>
      <Toast.Body>{text}</Toast.Body>
    </Toast>
  );
};
