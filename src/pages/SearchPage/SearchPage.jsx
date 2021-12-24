import React from 'react'

export const SearchPage = ({searchData}) => {
    return (
        <div>
            {
                searchData.map(movie => (
                    movie.poster_path ? 
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width='200px'/>
                    </div>
                    :
                    null
                ))
            }

        </div>
    )
}
