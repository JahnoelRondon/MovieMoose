import React, {useContext} from 'react'
import {GlobalContext} from './../../context/GlobalState'


export const WatchList = () => {
    const {watchlist} = useContext(GlobalContext)
    // create conditional rendering if there are no movies added yet
    return (
        <div>
            {
                watchlist.map((movie) => (
                    <h1 style={{color: 'white'}}>{movie.title}</h1>
                ))
            }
        </div>
    )
}
