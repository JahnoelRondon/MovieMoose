import React, {createContext, useReducer, useEffect} from 'react'
import {AppReducer} from './AppReducer'

// initial state
const initState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : []
};

// CONTEXT

// when ever we want to use the data from the MovieProvider, we import MovieContext
// into the component, the component must be wrapped insde of the Provider
export const GlobalContext = createContext(initState)


// PROVIDER

// Holds information and provides information to the different components that are wrapped within it
// usually wrapped around the entire app
export const GlobalProvider = (props) => {

    // state represents the arrays in our initial state being passed in and dispatch is sort of an alias for action in our reducer.
    const [state, dispatch] = useReducer(AppReducer, initState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    }, [state])

    // actions
    const addToWatchlist = (movie) => {
        dispatch({ type: "ADD_TO_WATCHLIST", payload: movie})
    };

    const removeFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id})
    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist, 
            addToWatchlist,
            removeFromWatchlist
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}