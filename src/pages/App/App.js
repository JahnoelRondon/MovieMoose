// -----------------------------------imports--------------------------------------------
import Header from '../../components/Header/Header.jsx'
import React, {useState, useEffect} from 'react'

function App() {

    // -----------------------------------State--------------------------------------------
    const [apiSearch, setSearch] = useState({
        baseUrl: 'http://www.omdbapi.com/?',
        apikey: '&apikey=cb3ee742',
        query: '&s=',
        searchTitle: '',
        searchUrl: ''
    });

    
    // -----------------------------------functions--------------------------------------------
    
    const handleChange = (event) => {
        setSearch({...apiSearch, searchTitle: event.target.value})
        // note:
        // to update our state we use the setSearch function and pass in a new object.
        // first we take a copy of the current object and its properties and values
        // and then we change the searchTitle to the inputs value
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearch({...apiSearch, searchUrl: apiSearch.baseUrl + apiSearch.query + apiSearch.searchTitle + apiSearch.apikey})
        
    }


    return (
    <>
        <Header />
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='searchTitle' 
                placeholder='search movie' 
                value={apiSearch.searchTitle}
                onChange={handleChange}>
            </input>
            <button type='submit'>Submit</button>
        </form>
    </>
    );
}

export default App;
