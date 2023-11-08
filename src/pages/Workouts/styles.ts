import { Link } from 'react-router-dom';
import styled from 'styled-components'

// export const Container = styled.div`
//
//   gap: 10px;
//   height: 60px;
//   background-color: #fff;
//   padding: 0 20px;
//   margin-top: 30px;
//   box-shadow: 0px 0px 5px #ccc;
//   border-radius: 5px;
//   width: 400px;
//   margin-left: auto;
//   align-items: center;
//
// `;

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

// export const Line = styled.div`
//   //padding-top: 15px;
//   display: block;
//   text-align: start;
//   align-items: center;
//   position: relative;
//   float: right;
//   //padding-left: 300px;
//   cursor: pointer;
//   content: "";
//   padding-left: 10px;
// `;
// export const DivContainer = styled.div``;

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
`
