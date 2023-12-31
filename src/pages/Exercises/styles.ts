import styled from 'styled-components'

export const Container = styled.div`
  font-family: "poppins", sans-serif;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`

export const Title = styled.h2``

export const Subtitle = styled.h3`
  color: #666;
  font-weight: 400;
  margin-bottom: 20px;
`
export const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`

export const Label = styled.label``

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`

export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
`
export const Td = styled.td`
  padding-top: 15px;

`;

export const TrashButton = styled.button`
cursor: pointer;
border: none;
background-color: transparent;
margin-left: 10px;

`
