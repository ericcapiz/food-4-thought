import {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './components/Header';
import Recipe from './components/Recipe';
import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    flex-direction: column;
`;

const REACT_APP_API_ID = process.env.REACT_APP_API_ID
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [newSearch, setNewSearch] = useState("bacon");
  const [search, setSearch] = useState("");
  const [ recipes, setRecipes]= useState([]);

  useEffect( ()=>{
    async function fetchRecipes(){
      const res = await axios.get(`https://api.edamam.com/search?q=${newSearch}&app_id=${REACT_APP_API_ID}&app_key=${REACT_APP_API_KEY}`)
      setRecipes(res.data.hits)
    }
    fetchRecipes()
  },[newSearch])

  const ClickEvent = ()=>{
    setNewSearch(search);
    console.log("new search",newSearch)
    setSearch("")
  }

  const InputEvent = (e)=>{
    setSearch(e.target.value)
    
  }
  
  return (
    <Container>
      <Header Searching={search} inputEvent={InputEvent} click={ClickEvent}  />
      <Recipe Recipes={recipes} />
    </Container>
  );
}

export default App;
