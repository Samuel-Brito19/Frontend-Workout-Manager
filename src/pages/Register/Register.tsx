import { Link } from 'react-router-dom'
import * as Styled from './styles'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            const res = await axios.post('/register', inputs)
            console.log(res)
    
        } catch (error) {
            console.log(error)
        }
    }

    console.log(inputs)
    return (
        <Styled.Container>
        <h2>Register</h2>
        <Styled.Form>
            <Styled.Input required type='text' placeholder='Username' name='username' onChange={handleChange}/>
            <Styled.Input required type='email' placeholder='Enter email' name='email' onChange={handleChange}/>
            <Styled.Input required type='password' placeholder='Enter password' name='password' onChange={handleChange}/>
            <Styled.Button onClick={handleSubmit}>REGISTER</Styled.Button>
            <Styled.Span>Already have an account? <Link to="/">Login</Link></Styled.Span>
        </Styled.Form>
        
    </Styled.Container>
    )
}

export default Register