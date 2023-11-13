import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import * as Styled from './styles'
import GlobalStyle from '../../styles/global'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { AxiosError } from 'axios'
import { type ExercisesTypes } from '../../types/common'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Exercises = () => {
  const params = useParams()

  const [workoutExercises, setWorkoutExercises] = useState<ExercisesTypes[]>([])
  const [name, setName] = useState('')
  const [sets, setSets] = useState(0)
  const [repetitions, setRepetitons] = useState(0)

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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (name === '' || sets === 0 || repetitions === 0) return

    try {
      const Req = await api.post<ExercisesTypes>('/exercises', {
        name,
        sets,
        repetitions,
        workoutId: Number(params.workoutId)
      })

      const insertedExercise = Req.data

      if (Req.status === 200) {
        setWorkoutExercises((prevState) => [...prevState, insertedExercise])
      }

      setName('')
      setRepetitons(0)
      setSets(0)
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
      }
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await api
        .delete(`/exercises/${id}`)
        .then(() => {
          const newArray = workoutExercises.filter((exercise) => exercise.id !== id)
          setWorkoutExercises(newArray)
        })
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
      }
    }
  }

  return (
    <>
      <Styled.Container>
        <Styled.Title>Exercises</Styled.Title>
        <Styled.Subtitle>From workout {params.workoutId}</Styled.Subtitle>

        <Styled.FormContainer onSubmit={handleSubmit}>
            <Styled.InputArea>
                <Styled.Label>Name</Styled.Label>
                <Styled.Input name='name' value={name} onChange={(e) => { setName(e.target.value) }}/>
            </Styled.InputArea>
            <Styled.InputArea>
                <Styled.Label>Sets</Styled.Label>
                <Styled.Input name='sets' value={sets} onChange={(e) => { setSets(parseInt(e.target.value)) }}/>
            </Styled.InputArea>
            <Styled.InputArea>
                <Styled.Label>Repetitons</Styled.Label>
                <Styled.Input name='repetitions' value={repetitions} onChange={(e) => { setRepetitons(parseInt(e.target.value)) }}/>
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
            <Styled.Tbody>
              {workoutExercises.map((exercise) => (
                <Styled.Tr key={exercise.id}>
                  <Styled.Td>{exercise.name}</Styled.Td>
                  <Styled.Td>{exercise.sets}</Styled.Td>
                  <Styled.Td>{exercise.repetitions}</Styled.Td>
                  <Styled.Td>
                  <Styled.TrashButton>
                    <FaTrash onClick={async () => { await handleDelete(exercise.id); }}/>

                  </Styled.TrashButton>
                  <Styled.TrashButton>
                  <FaEdit/>
                  </Styled.TrashButton>
                  </Styled.Td>
                </Styled.Tr>
              ))}
            </Styled.Tbody>
        </Styled.Table>
      </Styled.Container>

      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  )
}

export default Exercises
