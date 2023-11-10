import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import * as Styled from './styles'
import GlobalStyle from '../../styles/global'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { AxiosError } from 'axios'
import { type ExercisesTypes } from '../../types/common'

const Exercises = () => {
  const params = useParams()

  const [workoutExercises, setWorkoutExercises] = useState<ExercisesTypes[]>([])
  const [exercise, setExercise] = useState('')

  const getExercises = async () => {
    try {
      const response = await api.get(`/exercises/${params.workoutId}`)
      setWorkoutExercises(response.data)
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
        return
      }

      alert('Something went wrong, please try again.')
    }
  }

  useEffect(() => {
    getExercises()
  }, [])

  return (
    <>
      <Styled.Container>
        <Styled.Title>Exercises</Styled.Title>
        <Styled.Subtitle>From workout {params.workoutId}</Styled.Subtitle>

        <Styled.FormContainer>
            <Styled.InputArea>
                <Styled.Label>Name</Styled.Label>
                <Styled.Input name='name' />
            </Styled.InputArea>
            <Styled.InputArea>
                <Styled.Label>Series</Styled.Label>
                <Styled.Input name='series' />
            </Styled.InputArea>
            <Styled.InputArea>
                <Styled.Label>Repetitons</Styled.Label>
                <Styled.Input name='repetitions' />
            </Styled.InputArea>
            <Styled.Button type='submit'>SAVE</Styled.Button>
        </Styled.FormContainer>

        <Styled.Table>
            <Styled.Thead>
                <Styled.Tr></Styled.Tr>
                    <Styled.Th>Name</Styled.Th>
                    <Styled.Th>Series</Styled.Th>
                    <Styled.Th>Repetitons</Styled.Th>
                    <Styled.Th></Styled.Th>
                    <Styled.Th></Styled.Th>
                <Styled.Tr></Styled.Tr>
            </Styled.Thead>
        </Styled.Table>
      </Styled.Container>

      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  )
}

export default Exercises
