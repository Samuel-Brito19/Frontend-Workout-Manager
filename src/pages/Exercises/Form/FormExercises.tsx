// import { useRef } from 'react'
import * as Styled from './styles'

const Form = () => {
  // const ref = useRef()
  return (

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
  )
}

export default Form
