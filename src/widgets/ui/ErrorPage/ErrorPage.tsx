import { Button } from "react-bootstrap";

export const PageError = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div>
      Непредвиденная ошибка
      <Button onClick={reloadPage}>Обновить странцу</Button>
    </div>
  );
};
