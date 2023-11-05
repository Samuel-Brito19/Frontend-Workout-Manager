import {useEffect, useRef } from 'react'

import { toast } from 'react-toastify'
import api from '../../../services/api'
import { AxiosError } from 'axios'

interface FormProps {
    getWorkouts: () => Promise<void>,
    onEdit: () => void,
    setOnEdit: (onEdit: () => void) => Promise<void>
}


const FormWorkout = ({ getWorkouts, onEdit, setOnEdit }: FormProps) => {
    const ref = useRef()

    useEffect(() => {
        if(onEdit) {
            const workout = ref.current

            workout.name.value = onEdit.name
        }
    }, [onEdit])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const workout = ref.current
        
        try {

            if(!workout.name.value) {
                return toast.warn("Fill the field!")
            }

            if(onEdit) {
                await api.put('/users/:userId/workouts', {
                    name: workout.name.value
                })
                .then(({data}) => toast.success(data))
                .catch(({ data }) => toast.error(data));
            } else {
                await api.post('/users/:userId/workouts',{
                    name: workout.name.value
                })
            }

            workout.name.value = ""

        
            
            setOnEdit(null)
            getWorkouts()

            
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data.error);
                return;}
            }
        }

    }
    return(
        <Styled.FormContainer>
            <Styled.InputArea>
                <Styled.Label>Workout</Styled.Label>
                <Styled.Input></Styled.Input>
            </Styled.InputArea>
            <Styled.Button type='submit'>Save</Styled.Button>
        </Styled.FormContainer>
    )
}

export default FormWorkout