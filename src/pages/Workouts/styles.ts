import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

export const WorkoutTitle = styled(Link)`
  flex: 1;
  height: 100%;
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;

  &:hover {
    color: #2c73d2;
  }
`;

export const WorkoutEdit = styled(Link)`

`

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  //margin:10px auto;
  //word-break: break-all;
`;

export const Div = styled.div`
display: flex;
justify-content: flex-end;
flex: 1;
align-items: center;
float: 1;
position: relative;
cursor: pointer;
gap: 20px;
`

export const FormContainer = styled.form`
display: flex;
align-items: flex-end;
gap: 10px;
flex-wrap: wrap;
background-color: #fff;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
padding: 25px;
`

export const InputArea = styled.div`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
width: 300px;
padding: 0 10px;
border: 1px solid #bbb;
border-radius: 5px;
height: 40px;
`

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`

export const Tr = styled.tr``

export const Td = styled.td`
  padding-top: 15px;

`
export const InputTitle = styled.input`


`
