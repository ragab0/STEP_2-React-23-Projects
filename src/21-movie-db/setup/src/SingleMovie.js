import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from './context'
import Error from './error'

const SingleMovie = () => {

  const {id} = useParams();
  const [err, setErr] = useState(false)
  const [movie, setMovie] = useState({});
  const {API_ENDPOINT, loading, setLoading} = useGlobalContext()
  const {Poster, Title, Year, Plot} = movie;

  useEffect(() => {
    setLoading(true);
    fetch(API_ENDPOINT + '&i=' + id)
    .then(res => res.json())
    .then(data => data.Error ? setErr(true) : setMovie(data))
    .catch(err => setErr(true))
    .finally(() => setLoading(false));
  }, [API_ENDPOINT, id, setLoading, setErr])

  
  if (loading) return <div className='loading'></div>
  if (err) return <Error />

  return (
    <>
      <section className='single-movie'>
        <img src={Poster} alt={Title} />
        <div className='single-movie-info'>
          <h2>{Title}</h2>
          <p>{Plot}</p>
          <h4>{Year}</h4>
          <Link to='/' className='btn'>back to movies</Link>
        </div>
      </section>
    </>
  )
}

export default SingleMovie;
