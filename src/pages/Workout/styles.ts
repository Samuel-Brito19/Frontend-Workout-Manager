import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  margin-top: 30px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  width: 400px;
`;

export const Title = styled.h2`
display: flex;
justify-content: center;
margin-bottom: 30px;
`

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
  width: 100px;
  align-items: start;
`;

export const Td = styled.td`
  //padding-top: 15px;
  display: flex;
  text-align: end;
  justify-content: space-between;
  padding-left: 300px;
  cursor: pointer;
`