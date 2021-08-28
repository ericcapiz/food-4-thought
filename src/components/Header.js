import styled from 'styled-components';


const TopBar = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    font-family: 'Architects Daughter','cursive';
    color:steelblue;
    @media(max-width:800px){
        flex-direction: column;
        align-items: center;
        span{
            margin: 15px 0
        }
    }
    @media(max-width:385px){
        span{
            font-size: 17px;
        }
    }
`
const Search = styled.div `
    display: flex;
    flex-direction: row;
    padding: 3px;
    border: 1px solid steelblue;
    border-radius: 10px;
   
`

const Input = styled.input `
    border: none;
    outline: none;
    margin-right: 10px;
    font-weight: bold;
    font-family: 'Architects Daughter','cursive';
    
`


const Header = () => {
    return (
        <TopBar>
            Food 4 Thought
            <span>Search Ingredients 4 Recipes</span>
            <Search>
                <img src="/search.svg" alt="search-icon" />
                <Input type="text" placeholder="YUMMMMMM..." />
            </Search>
        </TopBar>
    )
}

export default Header
