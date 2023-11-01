import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  background-color: #fff;
  padding: 20px;
  margin-top: 30px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  width: 400px;
  margin-left: auto;
  justify-content: space-between;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

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

export const Line = styled.div`
  //padding-top: 15px;
  display: block;
  text-align: start;
  align-items: center;
  position: relative;
  float: right;
  //padding-left: 300px;
  cursor: pointer;
  content: "";
  padding-left: 10px;
`;
export const DivContainer = styled.div``;

export const Span = styled.span``;
