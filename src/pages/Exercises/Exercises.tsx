import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import * as Styled from './styles'
import GlobalStyle from '../../styles/global'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { AxiosError } from 'axios'
import { initialExerciseState, type ExercisesTypes } from '../../types/common'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Exercises = () => {
  const params = useParams()

  const [workoutExercises, setWorkoutExercises] = useState<ExercisesTypes[]>([])
  const [exercise, setExercise] = useState<ExercisesTypes>(initialExerciseState)

  const resetExerciseState = () => {
    setExercise(initialExerciseState);
  };

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

    if (exercise?.name === '' || exercise?.sets === 0 || exercise?.repetitions === 0) return

    if (exercise.id !== 0) {
      await api.put(`/exercises/${exercise?.id}`, {
        name: exercise.name,
        sets: Number(exercise.sets),
        repetitions: Number(exercise.repetitions),
        workoutId: Number(exercise.workoutId)
      })
      setWorkoutExercises((prevExercises) => {
        // Replace the existing exercise with the updated one in the state
        return prevExercises.map((ex) => (ex.id === exercise.id ? exercise : ex));
      });

      resetExerciseState()
      return
    }

    try {
      const Req = await api.post<ExercisesTypes>('/exercises', {
        name: exercise.name,
        sets: Number(exercise.sets),
        repetitions: Number(exercise.repetitions),
        workoutId: Number(params.workoutId)
      })

      const insertedExercise = Req.data

      if (Req.status === 200) {
        setWorkoutExercises((prevState) => [...prevState, insertedExercise])
      }

      resetExerciseState()
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error)
      }
    }
  }

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (exercise != null) {
      setExercise({ ...exercise, [name]: value })
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
                <Styled.Input name='name' value={exercise?.name} onChange={handleEdit}/>
            </Styled.InputArea>
            <Styled.InputArea>
                <Styled.Label>Sets</Styled.Label>
                <Styled.Input name='sets' value={exercise?.sets} onChange={handleEdit}/>
            </Styled.InputArea>
            <Styled.InputArea>
                <Styled.Label>Repetitons</Styled.Label>
                <Styled.Input name='repetitions' value={exercise?.repetitions} onChange={handleEdit}/>
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
                  <FaEdit onClick={() => { setExercise(exercise); }}/>
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
