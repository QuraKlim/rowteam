import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div style={{ marginTop: "20vh", textAlign: "center" }}>
      <h1>Извините, такой страницы не существует</h1>
      <div>
        <p>Вернуться </p>
        <Link to={"/"}>на главную страницу</Link>
      </div>
    </div>
  );
};
