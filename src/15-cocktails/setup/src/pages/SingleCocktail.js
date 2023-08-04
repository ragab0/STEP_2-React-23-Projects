import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import Error from './Error';

const SingleCocktail = () => {
  
  const {id} = useParams();
  const [url] = [`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`];
  const [load, setLoad] = useState(true)
  const [data, setData] = useState(false)

  useEffect(() => {
    fetch(url) 
    .then(res =>  res
    .json()
    .then(data => setLoad(false) + setData(data.drinks) + console.log(data.drinks)))
    .catch(err => 'err')
    .finally(() => setLoad(false))
  }, [url])

  if (load) {
    return <Loading />
  } 
  
  if (!data) {
    return <Error />
  }
  
  const {strCategory, strDrink='name', strDrinkThumb='src', strAlcoholic} = data[0]


  return (
    <section className='section cocktail-section'>
      <Link to='/15-cocktails' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{strDrink}</h2>
      <div className='drink'>
        <img src={strDrinkThumb} alt='' />
        <div className='drink-info'>

 {/* : Pour All Ingredients Into A Cocktail Shaker, Mix And Serve Over Ice Into A Chilled Glass. */}
 {/* : Gin Grand Marnier Lemon Juice Grenadine */}

          <p><span className='drink-data'>Name :</span> {strDrink} </p> 
          <p><span className='drink-data'>Category :</span> {strCategory} </p>
          <p><span className='drink-data'>Info :</span> {strAlcoholic} </p>
          <p><span className='drink-data'>Glass :</span> {} </p>
          <p><span className='drink-data'>Instructons :</span> {} </p>
          <p><span className='drink-data'>Ingredients :</span> {} </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
