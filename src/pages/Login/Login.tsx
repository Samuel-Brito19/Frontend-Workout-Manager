import * as Styled from './styles'

const Login = () => {
    return (
        <Styled.Container>
            <h2>LOGIN</h2>
            <Styled.Form>
                <Styled.Input type='email' placeholder='Enter email'/>
                <Styled.Input type='email' placeholder='Enter email'/>
                <Styled.Button>ENTER</Styled.Button>
            </Styled.Form>
        </Styled.Container>
    )
}

export default Login