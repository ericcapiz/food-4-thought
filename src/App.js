import styled from 'styled-components';
import Header from './components/Header';
import Recipe from './components/Recipe';

const Container = styled.div `
    display: flex;
    flex-direction: column;
`;


function App() {
  return (
    <Container>
      <Header />
      <Recipe />
    </Container>
  );
}

export default App;
