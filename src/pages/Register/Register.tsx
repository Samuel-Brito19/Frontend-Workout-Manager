import { Link, useNavigate } from 'react-router-dom'
import * as Styled from './styles'
import { useState } from 'react'
import api from '../../services/api'
import { AxiosError } from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  })

  // const [passwordConf, setPasswordConf] = useState("")

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      await api.post('/users', inputs)
      console.log(inputs)

      if (inputs.password !== inputs.passwordConf) {
        alert('Password does not match!!')
        setInputs(
          {
            name: '',
            email: '',
            password: '',
            passwordConf: ''
          })

        return
      }

      navigate('/')
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
      }
    }
  }

  console.log(inputs)
  return (
        <Styled.Container>
        <h2>Register</h2>
        <Styled.Form>
            <Styled.Input required type='text' placeholder='Username' name='name' onChange={handleChange}/>
            <Styled.Input required type='email' placeholder='Enter email' name='email' onChange={handleChange}/>
            <Styled.Input required type='password' placeholder='Enter password' name='password' value={inputs.password} onChange={handleChange}/>
            <Styled.Input required type='password' placeholder='Confirm password' name='passwordConf' value={inputs.passwordConf} onChange={handleChange}/>
            <Styled.Button onClick={handleSubmit}>REGISTER</Styled.Button>
            <Styled.Span>Already have an account? <Link to="/">Login</Link></Styled.Span>
        </Styled.Form>

    </Styled.Container>
  )
}

export default Register
