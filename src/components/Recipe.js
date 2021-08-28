import styled from 'styled-components';
import RecipeList from './RecipeList';

const RecipeContainer = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    justify-content: space-evenly;
    background-color: #f0f6ff;
`

const Recipe = () => {
    return (
        <RecipeContainer>
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
        </RecipeContainer>
    )
}

export default Recipe
