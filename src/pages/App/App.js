// ------------------------------------------MUI------------------------


// -----------------------------------IMPORTS--------------------------------------------
import React, {useState, useEffect} from 'react'
import * as omdbService from '../../services/omdbapi.js'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
// components
import Header from '../../components/Header/Header.jsx'
import {WatchedPage} from '../WatchedPage/WatchedPage.jsx'
import {WatchList} from '../WatchList/WatchList.jsx'
import {AddPage} from '../AddPage/AddPage.jsx'


// ------------------------------------------MUI Variables------------------------


//------------------------------------My restyling----------


function App() {

    // -----------------------------------State--------------------------------------------
    const [apiSearch, setSearch] = useState({
        // api end point values
        baseUrl: 'https://api.themoviedb.org/3/search/movie',
        apikey: '?api_key=' + process.env.REACT_APP_TMDB_API_KEY,
        query: '&language=en-US&page=1&include_adult=false&query=',
        searchTitle: '',
        searchUrl: '',
        // data
        searchData: []
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
        setSearch({...apiSearch, searchUrl: apiSearch.baseUrl + apiSearch.apikey + apiSearch.query + apiSearch.searchTitle, searchTitle: ''})

        // concat all of our values to give the fetch end point
        // make searchTitle an empty string after
    }

    useEffect(() => {
        if(apiSearch.searchUrl) {

            omdbService.search(apiSearch.searchUrl)
            .then(data => setSearch({...apiSearch, searchData: data.results, searchUrl: ''}))

            // after the promise get the json object and set the search array as the new search data
            // reset searchurl after fetching for conditional
        }
    },[apiSearch])
    // 2nd parameter is to prevent an infite chain of updates when using useState/setSearch in useEffect with useEffect dependancy list

    console.log(apiSearch.searchData, apiSearch.searchUrl)
    return (
    <Router>

        <Header 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        apiSearch={apiSearch}
        setSearch={setSearch}
        />

        {/* route pages */}

        <Routes>

            {/* redirect to Watchlist */}
            <Route path="/" element={<Navigate replace to='WatchList' />} />

            {/* create WatchList */}
            <Route path='/WatchList' element={<WatchList />}/>

            <Route path='/Watched' element={<WatchedPage />}/>

            <Route path='/Add' element={<AddPage />}/>

        </Routes>

    </Router>
    );
}

export default App;
