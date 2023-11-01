//import { AiOutlinePlusCircle} from "react-icons/ai"
import * as Styled from "./styles";
import GlobalStyle from "../../styles/global";
import { FaTrash, FaEdit } from "react-icons/fa";

const Workouts = () => {
  return (
    <>
      <Styled.Title>Workouts</Styled.Title>
      <Styled.Button>+</Styled.Button>
      <Styled.Container>
        <Styled.Span>Chest</Styled.Span>
        <Styled.DivContainer>
          <Styled.Td>
            <FaTrash />
          </Styled.Td>
          <Styled.Td>
            <FaEdit />
          </Styled.Td>
        </Styled.DivContainer>
      </Styled.Container>
      <GlobalStyle />
    </>
  );
};

export default Workouts;
