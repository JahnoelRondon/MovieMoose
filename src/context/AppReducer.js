// function that returns some state data. Tells our store what to do with the data

export const AppReducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_WATCHLIST":
            return {
                ...state, 
                watchlist: [action.payload, ...state.watchlist]
            }
        default:
            return state
    }
}