import { useEffect, useState } from 'react'
import { Button, Title } from '../Exercises/styles'
import { Input } from '../Workouts/styles'
import { type Workout } from '../../types/common'
import { getUser } from '../../services/storage'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api'
import { AxiosError } from 'axios'

const WorkoutEdit = () => {
  const params = useParams()
  const [workout, setWorkout] = useState<Workout>()
  const navigate = useNavigate()

  const getWorkouts = async () => {
    const user = getUser()
    if (user === null) {
      alert('You must be logged in to access this page.')
      navigate('/')
      return
    }

    try {
      const response = await api.get(`/workout/${params.id}`)
      setWorkout(response.data)
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
        return
      }

      alert('Something went wrong, please try again.')
    }
  }

  const handleUpdate = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      await api.put(`/users/workouts/${params.id}`, {
        title: workout?.title
      })
      navigate('/workouts')
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
      }
    }
  }

  const handleSetTitle = (e: React.SyntheticEvent<HTMLInputElement>) => {
    if (workout != null) {
      setWorkout({ ...workout, title: e.currentTarget.value })
    }
  }

  useEffect(() => {
    getWorkouts()
  }, [])

  return (
        <>

        <Title>Edit Workout</Title>
        <Input value={workout?.title} onChange={handleSetTitle}></Input>
        <Button onClick={handleUpdate}>SAVE</Button>
        </>

  )
}

export default WorkoutEdit
