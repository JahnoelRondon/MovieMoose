import './watchlist.css'
import React, {useContext} from 'react'
import {GlobalContext} from './../../context/GlobalState'
import { FaTrashAlt } from "react-icons/fa";

export const WatchList = () => {
    const {watchlist, removeFromWatchlist} = useContext(GlobalContext)
    return (
        <div className='moviesContainer'>
            {
            watchlist.length ? 
                watchlist.map((movie) => (

                    <div className='movieWatch' key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title} poster`}/>
                        <button onClick={() => removeFromWatchlist(movie.id)}><FaTrashAlt/></button>
                    </div>
                ))     
            :
            <h1 style={{color: 'white'}}>Search Movies to Add to WatchList</h1>       
            }
        </div>
    )
}
