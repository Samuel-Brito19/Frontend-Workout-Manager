import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
//background-color: #f2f2f2;
height: 100vh;

& h2 {
    color: #242424;
    color-scheme: light dark;
    margin-bottom: 20px
;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
padding: 50px;
background-color:#f2f2f2;
width: 200px;
gap: 20px;
`

export const Input = styled.input`
padding: 10px;
border-bottom: 1px solid gray;
`

export const Button = styled.button`
padding: 10px;
border: none;
background-color: teal;
color:#242424;
cursor: pointer;
`

export const Span = styled.span`
font-size: 15px;
text-align: center;
`