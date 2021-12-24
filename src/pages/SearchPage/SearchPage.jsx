import React from 'react'

export const SearchPage = ({searchData}) => {
    console.log('search page: ', searchData)
    return (
        <div>
            {
                searchData.map(movie => (
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width='200px'/>
                    </div>
                ))
            }

        </div>
    )
}
