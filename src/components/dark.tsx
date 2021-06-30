import { FaAdjust } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.background};
`;

const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  color: ${(p) => (p.theme.colors.background === "#fff" ? "#000" : "#fff")};
`;

export default function DarkSwitcher({ toggleMode }) {
  return (
    <Container>
      <Button onClick={toggleMode}>
        <FaAdjust />
      </Button>
    </Container>
  );
}
