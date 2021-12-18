// -----------------------------------imports--------------------------------------------
import Header from '../../components/Header/Header.jsx'
import React, {useState, useEffect} from 'react'

function App() {

    // -----------------------------------State--------------------------------------------
    const [apiSearch, setSearch] = useState({
        baseUrl: 'http://www.omdbapi.com/?',
        apikey: 'apikey=cb3ee742',
        query: '&t=',
        searchTitle: 'avatar',
        searchUrl: ''
    });


    useEffect(() => {
        document.title = `Title ${apiSearch.searchTitle}`
    })

    // -----------------------------------functions--------------------------------------------




    return (
    <>
        <Header />
        <form>
            <input type='text' name='searchTitle' placeholder='search movie' value={apiSearch.searchTitle}/>
        </form>
    </>
    );
}

export default App;
