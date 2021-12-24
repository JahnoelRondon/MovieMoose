import React, {createContext, useReducer, useEffect} from 'react'
import {AppReducer} from './AppReducer'

// initial state
const initState = {
    watchlist: [],
    watched: []
};

// create the contect
export const GlobalContext = createContext(initState)

//provider component

// the provider allows us to access the global context from other components/variables
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initState);

    // actions
    const addToWatchlist = (movie) => {
        dispatch({ type: "ADD_TO_WATCHLIST", payload: movie})
    };

    return (
        <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched, addToWatchlist}}>
            {props.children}
        </GlobalContext.Provider>
    )
}