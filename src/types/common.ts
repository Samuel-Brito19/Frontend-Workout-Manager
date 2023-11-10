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
  series: number
  repetitions: number
  workoutId: number
}
