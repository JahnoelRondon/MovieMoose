import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './searchpage.css'

export const SearchPage = ({searchData}) => {

    const {addToWatchlist, watchlist} = useContext(GlobalContext)
    console.log(searchData);

    return (
        <div className='searchContainer'>
            {
                
                searchData.map(movie => (
                    
                    
                    // if poster movie path exists render otherwise render no value
                    movie.poster_path ? 

                    <div className='movie' key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title} poster`}/>
                        <div className='movieContent'>
                            <p className="title">{movie.title}<br/>
                                <small>{
                                    movie.release_date ? 
                                    movie.release_date.substring(0,4) : ''
                                }</small>
                            </p>
                            <button 
                            onClick={() => addToWatchlist(movie)}
                            disabled={watchlist.find(storedMovie => storedMovie.id === movie.id ? true : false)}
                            >
                                {watchlist.find(storedMovie => storedMovie.id === movie.id ? true : false) ? 'In my watchlist' : 'Add to Watchlist'}
                            </button>                          
                        </div>

                    </div>
                    :
                    null
                ))
            }

        </div>
    )
}
