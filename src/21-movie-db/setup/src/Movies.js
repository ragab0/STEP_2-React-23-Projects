import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

export default function Movies() {

  const {data, loading} = useGlobalContext();

  if (loading) {
    return <div className='loading' />
  }

  return (
    <section className='movies'>
      {
        data.map((art, i) => {
          const {Poster, Title, Year, imdbID} = art;
          return (
            <article key={i} className='movie'>
              <Link to={'/21-movie-db/movies/' + imdbID}>
                <img alt={Title} src={Poster} />
                <div className='movie-info'>
                  <h4 className='title'>{Title}</h4>
                  <p>{Year}</p>
                </div>
              </Link>
            </article>
          )
        })
      }
    </section>
  )
}