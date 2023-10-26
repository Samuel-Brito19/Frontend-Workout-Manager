import { Link } from 'react-router-dom'
import * as Styled from './styles'

const Login = () => {
    return (
        <Styled.Container>
            <h2>Login</h2>
            <Styled.Form>
                <Styled.Input type='email' placeholder='Enter email'/>
                <Styled.Input type='email' placeholder='Enter email'/>
                <Styled.Button>ENTER</Styled.Button>
            </Styled.Form>
            <Styled.Span>Don't you have an account? <Link to="/register">Register</Link></Styled.Span>
        </Styled.Container>
    )
}

export default Login