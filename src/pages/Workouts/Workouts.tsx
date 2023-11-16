import * as Styled from './styles'
import GlobalStyle from '../../styles/global'
import { toast, ToastContainer } from 'react-toastify'
import api from '../../services/api'
import { getUser } from '../../services/storage'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { type Workout } from '../../types/common'

const Workouts = () => {
  const navigate = useNavigate()
  const user = getUser()
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [workout, setWorkout] = useState<Workout>()
  const [title, setTitle] = useState<string>('')

  const getWorkouts = async () => {
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
  }, [workouts])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    try {
      const Request = await api.post<Workout>('/users/workouts', {
        title,
        userId: user?.id
      })
      const insertedWorkout = Request.data

      if (Request.status === 200) {
        setWorkouts((prevState) => [...prevState, insertedWorkout])
        setTitle('')
        setWorkout(undefined)
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
      }
    }
  }

  const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const req = await api.put(`/users/workouts/${workout?.id}`, {
        title: workout?.title
      })

      if (req.status === 200) {
        setWorkout(undefined)
        setTitle('')
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
      }
    }
  }

  const handleSetTitle = (e: React.SyntheticEvent<HTMLInputElement>) => {
    if (workout?.title != null) {
      setWorkout({ ...workout, title: e.currentTarget.value })
    } else {
      setTitle(e.currentTarget.value)
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
        <Styled.FormContainer onSubmit={async (e: any) => { ((workout?.id) != null) ? await handleUpdate(e) : handleSubmit(e) }}>
        <Styled.InputArea>
          <Styled.Input name='title' value={workout?.title} onChange={handleSetTitle}></Styled.Input>
          </Styled.InputArea>

          <Styled.Button type='submit'>Save</Styled.Button>
        </Styled.FormContainer>
        {workouts.map((workout) => (
          <Styled.Table key={workout.id}>
            <Styled.WorkoutTitle to={`/workouts/${workout.id}/exercises`}>{workout.title}</Styled.WorkoutTitle>
            <Styled.Tr>
              <Styled.Div>
              <FaTrash onClick={async () => { await handleDelete(workout.id); }} />
              <FaEdit onClick={() => { setWorkout(workout); }}/>
              </Styled.Div>
            </Styled.Tr>
          </Styled.Table>

        ))}
      </Styled.Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  )
}

export default Workouts
