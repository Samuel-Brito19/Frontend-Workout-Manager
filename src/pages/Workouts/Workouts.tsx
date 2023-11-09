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
import { FaTrash } from 'react-icons/fa';

const Workouts = () => {
  const navigate = useNavigate()

  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [workout, setWorkout] = useState('')

  const getWorkouts = async () => {
    const user = getUser()
    if (user === null) {
      alert('You must be logged in to access this page.')
      navigate('/')
      return
    }

    try {
      const response = await api.get('/users/workouts')
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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    try {
      // const user = getUser()
      const Request = await api.post<Workout>('/users/workouts', {
        title: workout
      })
      const insertedWorkout = Request.data

      if (Request.status === 201) {
        setWorkouts((prevState) => [...prevState, insertedWorkout])
      }

      setWorkout('')
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
      }
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await api
        .delete(`/users/workouts/${id}`)
        .then(() => {
          const newArray = workouts.filter((workout) => workout.id !== id)
          setWorkouts(newArray)
        })
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
      }
    }
  }

  return (
    <>
      <Styled.Container >
        <Styled.Title>Workouts</Styled.Title>
        <FormContainer onSubmit={handleSubmit}>
        <InputArea>
          <Input name='workout' value={workout} onChange={(e) => { setWorkout(e.target.value) }}></Input>
          </InputArea>
          <Button type='submit'>Save</Button>
        </FormContainer>
        {workouts.map((workout) => (
          <Styled.Table key={workout.id}>
            <Styled.WorkoutTitle to={`/workouts/${workout.id}/exercises`}>{workout.title}</Styled.WorkoutTitle>
            <Styled.Div>
              <FaTrash onClick={async () => { await handleDelete(workout.id); }} />
            </Styled.Div>
          </Styled.Table>

        ))}
      </Styled.Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  )
}

export default Workouts
