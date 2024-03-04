import styles from "./Toasts.module.scss";
import { useAppSelector } from "app/store/hooks";
import { ToastItem } from "./Toast";

export function Toasts() {
  const { toasts } = useAppSelector((state) => state.toast);
  return (
    <div className={styles.toast_wrapper}>
      {toasts.map((toast, index) => (
        <ToastItem title={toast.title} text={toast.text} key={index} />
      ))}
    </div>
  );
}

export default Toasts;
