// function that returns some state data. Tells our store what to do with the data

export const AppReducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_WATCHLIST":
            return {
                ...state, 
                watchlist: [action.payload, ...state.watchlist]
            }
            case "REMOVE_FROM_WATCHLIST":
                return {
                    ...state, 
                    // filter will return all of the movies that are not equal to the id we pass through
                    watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
                }
        default:
            return state
    }
}