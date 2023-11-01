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
        <Styled.WorkoutTitle to="/workouts/3/exercises">
          Chest
        </Styled.WorkoutTitle>
        <Styled.DivContainer>
          <Styled.Line>
            <FaTrash />
          </Styled.Line>
          <Styled.Line>
            <FaEdit />
          </Styled.Line>
        </Styled.DivContainer>
      </Styled.Container>
      <GlobalStyle />
    </>
  );
};

export default Workouts;
