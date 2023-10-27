import { Link } from 'react-router-dom'
import * as Styled from './styles'

const Register = () => {
    return (
        <Styled.Container>
        <h2>Register</h2>
        <Styled.Form>
            <Styled.Input required type='text' placeholder='Username'/>
            <Styled.Input required type='email' placeholder='Enter email'/>
            <Styled.Input required type='password' placeholder='Enter password'/>
            <Styled.Button>REGISTER</Styled.Button>
            <Styled.Span>Already hava an account? <Link to="/">Login</Link></Styled.Span>
        </Styled.Form>
        
    </Styled.Container>
    )
}

export default Register