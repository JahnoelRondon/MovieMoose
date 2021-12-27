// ------------------------------------------MUI Themeing------------------------
import {ThemeProvider } from '@mui/material/styles';
import {theme} from './../../themes/theme.js'

// -----------------------------------IMPORTS--------------------------------------------
import React, {useState, useEffect} from 'react'
import * as omdbService from '../../services/omdbapi.js'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import { GlobalProvider } from '../../context/GlobalState.js';

// components
import Header from '../../components/Header/Header.jsx'
import {WatchedPage} from '../WatchedPage/WatchedPage.jsx'
import {WatchList} from '../WatchList/WatchList.jsx'
import {SearchPage} from '../SearchPage/SearchPage.jsx'


// ------------------------------------------MUI Variables------------------------




function App() {
    let navigate = useNavigate();
    
    // -----------------------------------State--------------------------------------------
    const [apiSearch, setSearch] = useState({
        // api end point values
        baseUrl: 'https://api.themoviedb.org/3/search/movie',
        apikey: '?api_key=' + process.env.REACT_APP_TMDB_API_KEY,
        query: '&language=en-US&page=1&include_adult=false&query=',
        searchTitle: '',
        searchUrl: '',
        // data
        searchData: [],
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
            .then(data => setSearch({...apiSearch, searchData: data.results, searchUrl: '' }))
            .then(() => {navigate("/search")})
            
            // after the promise get the json object and set the search array as the new search data
            // reset searchurl after fetching for conditional
            // after it resolves then navigate to the search page where results are passed to.
        }
    },[apiSearch, navigate])
    // 2nd parameter with brackets is to prevent an infite chain of updates when using useState/setSearch in useEffect with useEffect dependancy list as well as specifying the render
    
    return (
        <GlobalProvider>

            <ThemeProvider theme={theme}>

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

                    <Route path='/search' element={<SearchPage searchData={apiSearch.searchData} />}/>

                </Routes>
            </ThemeProvider>

        </GlobalProvider>
    );
}

export default App;
