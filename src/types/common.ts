export interface User {
  id: number
  email: string
}

export interface Workout {
  id: number
  title: string
  userId: number
}

export interface ExercisesTypes {
  id: number
  name: string
  sets: number
  repetitions: number
  workoutId: number
}

export const initialExerciseState: ExercisesTypes = {
  id: 0,
  name: '',
  repetitions: 0,
  sets: 0,
  workoutId: 0
};
