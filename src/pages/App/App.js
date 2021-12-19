// ------------------------------------------MUI------------------------


// -----------------------------------IMPORTS--------------------------------------------
import Header from '../../components/Header/Header.jsx'
import React, {useState, useEffect} from 'react'
import * as omdbService from '../../services/omdbapi.js'


// ------------------------------------------MUI Variables------------------------


//------------------------------------My restyling----------


function App() {

    // -----------------------------------State--------------------------------------------
    const [apiSearch, setSearch] = useState({
        baseUrl: 'http://www.omdbapi.com/?',
        apikey: '&apikey=' + process.env.REACT_APP_API_KEY,
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
        setSearch({...apiSearch, searchUrl: apiSearch.baseUrl + apiSearch.query + apiSearch.searchTitle + apiSearch.apikey, searchTitle: ''})

        // concat all of our values to give the fetch end point
        // make searchTitle an empty string after
    }

    // useEffect(() => {
    //     if(apiSearch.searchUrl) {
    //         omdbService.search(apiSearch.searchUrl)
    //         setSearch({...apiSearch, searchUrl: ''})
    //         // reset searchurl after fetching for conditional
    //     }
    // },[apiSearch])
    // 2nd parameter is to prevent an infite chain of updates when using useState/setSearch in useEffect with useEffect dependancy list

    return (
    <>

        <Header 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        apiSearch={apiSearch}
        setSearch={setSearch}
        />

        

        {/* <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='searchTitle' 
                placeholder='search movie' 
                value={apiSearch.searchTitle}
                onChange={handleChange}>
            </input>
            <button type='submit'>Submit</button>
        </form> */}


    </>
    );
}

export default App;
