import styled from "styled-components"; 

const Father = styled.div`
  display: fles; 
  color: #ef4056;
`;
const Box = styled.div`
  background: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50%;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border:0;
  padding: 20px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Box bgColor="teal" />
      <Circle bgColor="blue" />
      <Btn>Log in</Btn>
      <Btn as="a" href="/">Log in</Btn>
      <Input />
    </Father>
  );
}

export default App;
