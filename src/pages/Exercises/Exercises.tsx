import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import * as Styled from "./styles";
import GlobalStyle from "../../styles/global";
import Form from "./Form/FormExercises";
import Grid from "./Grid/Grid";
import { useParams } from "react-router-dom";

const Exercises = () => {
  const params = useParams();

  return (
    <>
      <Styled.Container>
        <Styled.Title>Exercises</Styled.Title>
        <Styled.Subtitle>From workout {params.workoutId}</Styled.Subtitle>
        <Form />
        <Grid />
      </Styled.Container>

      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
};

export default Exercises;
