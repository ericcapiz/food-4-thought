import styled from 'styled-components';


const TopBar = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    box-shadow:  0 3px 6px 0 teal;
    font-family: 'Architects Daughter','cursive';
    color:steelblue;
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
            <Search>
                <img src="/search.svg" alt="search-icon" />
                <Input type="text" placeholder="search by ingredients..." />
            </Search>
        </TopBar>
    )
}

export default Header
