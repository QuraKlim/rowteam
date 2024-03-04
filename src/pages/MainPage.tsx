import { Projects } from "entities/ui/Projects/Projects";
import { Search } from "entities/ui/Search/Search";
import Toasts from "entities/ui/Toasts/Toasts";
import { Container } from "react-bootstrap";

const MainPage = () => {
  return (
    <Container>
      <Search />
      <Projects />
      <Toasts />
    </Container>
  );
};

export default MainPage;
