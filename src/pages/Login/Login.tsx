import { Link } from 'react-router-dom'
import * as Styled from './styles'

const Login = () => {
    return (
        <Styled.Container>
            <h2>Login</h2>
            <Styled.Form>
                <Styled.Input type='email' placeholder='Enter email'/>
                <Styled.Input type='password' placeholder='Enter password'/>
                <Styled.Button>ENTER</Styled.Button>
                <Styled.Span>Don't have an account yet? <Link to="/register">Register</Link></Styled.Span>
            </Styled.Form>
            
        </Styled.Container>
    )
}

export default Login