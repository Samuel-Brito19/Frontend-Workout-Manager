//import { AiOutlinePlusCircle} from "react-icons/ai"
import * as Styled from './styles'
import GlobalStyle from "../../styles/global"
import { FaTrash, FaEdit } from "react-icons/fa"

const Workout = () => {
    return (
        <>
            <Styled.Title>Workouts</Styled.Title>
            <Styled.Button>+</Styled.Button>
            <Styled.Container>Chest 
                <Styled.Td>
                <FaTrash/>
                <FaEdit/>
                </Styled.Td>
            </Styled.Container>
            
            <GlobalStyle/>
        </>
    )
}

export default Workout