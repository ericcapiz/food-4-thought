import {useState} from 'react'

import styled from 'styled-components';

const Recipe = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 10px;
    margin: 20px;
    box-shadow:  0 3px 10px 0 black;
`

const Cover = styled.img `
    height: 250px;
    width:250px;
    border-radius: 10px;
`

const RecipeName = styled.span `
    margin: 15px 0;
    color: steelblue;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Architects Daughter','cursive';
`

const RecipeIngredients = styled.span `
    margin-bottom: 15px;
    text-align: center;
    padding: 5px 0;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #5959e7;
    cursor: pointer;
    border: 2px solid #5959e7;
    border-radius: 10px;
    font-family: 'Indie Flower','cursive';
    :hover{
        background-color:#5959e7;
        color:white;
        letter-spacing: 4px;
    }
`

const Complete = styled(RecipeIngredients)` 
    color: #1a4173; 
    border: 2px solid #1a4173;
    :hover{
        background-color:#1a4173;
        color:white;
        letter-spacing: 4px;
    }
`
  

const RecipeList = ({Recipes}) => {
    console.log("recipe list",Recipes)
    const [open, setOpen] = useState(false);

    

    return (
        <>
            {Recipes.map((recipe)=>(
                <div  className="diag0"  key={recipe.recipe.url}>
                    
                     <Recipe>
                        <Cover src={recipe.recipe.image} alt="meal" />
                        <RecipeName>{recipe.recipe.label}</RecipeName>
                        <RecipeIngredients onClick={()=>setOpen(!open)}>View Ingredients</RecipeIngredients>
                        <Complete onClick={()=>window.open(recipe.recipe.url)}>View Recipe</Complete>
                        {open && (
                            <div >
                            {recipe.recipe.ingredientLines.map((ingredient)=>(
                                            
                                            <p style={{color:"black"}}>{ingredient}</p>
                                        
                                    ))}
                            </div>
                        )}
                    </Recipe>
                </div>
            ))}
            </>
    )
}

export default RecipeList
