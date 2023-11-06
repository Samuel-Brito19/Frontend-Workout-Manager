import * as Styled from './styles'
import GlobalStyle from '../../styles/global'
import { toast, ToastContainer } from 'react-toastify'
import api from '../../services/api'
import { getUser } from '../../services/storage'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { type Workout } from '../../types/common'
import { Button, FormContainer, Input, InputArea } from './Form/styles'

const Workouts = () => {
  const navigate = useNavigate()

  const [workouts, setWorkouts] = useState<Workout[]>([])

  const getWorkouts = async () => {
    const user = getUser()
    if (user === null) {
      alert('You must be logged in to access this page.')
      navigate('/')
      return
    }

    try {
      const response = await api.get(`/users/${user.id}/workouts`)
      setWorkouts(response.data)
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
        return
      }

      alert('Something went wrong, please try again.')
    }
  }

  useEffect(() => {
    getWorkouts()
  }, [])

  return (
    <>
      <Styled.Container>
        <Styled.Title>Workouts</Styled.Title>
        <FormContainer>
        <InputArea>
          <Input></Input>
          </InputArea>
          <Button>Save</Button>
        </FormContainer>
        {workouts.map((workout) => (
          <div key={workout.id}>
            <h3>{workout.title}</h3>
            <p>Example</p>
          </div>
        ))}
      </Styled.Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  )
}

export default Workouts
