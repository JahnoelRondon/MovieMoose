import React from 'react'
import './searchpage.css'

export const SearchPage = ({searchData}) => {
    console.log(searchData);
    return (
        <div className='searchContainer'>
            {
                searchData.map(movie => (
                    // if poster movie path exists render otherwise render no value
                    movie.poster_path ? 

                    <div className='movie' key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                        <div className='movieContent'>
                            <p>{movie.title}<br/><small>{movie.release_date}</small></p>
                            <button>add to watchlist</button>
                            <button>already watched</button>                            
                        </div>

                    </div>
                    :
                    null
                ))
            }

        </div>
    )
}
