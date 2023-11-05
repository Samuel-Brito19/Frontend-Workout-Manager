// import { AiOutlinePlusCircle} from "react-icons/ai"
import * as Styled from './styles'
import GlobalStyle from '../../styles/global'
import { toast, ToastContainer } from 'react-toastify'
import FormWorkout from './Form/FormWorkout'
import GridWorkout from './Grid/GridWorkout'

// interface WorkoutTitle {
//   title: string
// }

const Workouts = () => {
  return (
    <>
      <Styled.Container>
        <Styled.Title>Workouts</Styled.Title>
        <FormWorkout/>
        <GridWorkout/>
      </Styled.Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>

    </>

  )
}

export default Workouts
