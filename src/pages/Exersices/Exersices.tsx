import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'
import * as Styled from './styles'
import GlobalStyle from "../../styles/global"

const Exersices = () => {
    return (

        <>
            <Styled.Container>

            </Styled.Container>

            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
            <GlobalStyle/>
        </>
    )
}

export default Exersices