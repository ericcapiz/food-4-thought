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

const Recipe = ({Recipes}) => {
    // console.log("recipe comp",recipe)
    return (
        <RecipeContainer>
            <RecipeList Recipes={Recipes} />

        </RecipeContainer>
    )
}

export default Recipe
