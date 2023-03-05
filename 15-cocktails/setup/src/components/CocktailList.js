import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import Error from '../pages/Error'

const CocktailList = () => {

  const {data, loading, error, fetchAgain} = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} fetchAgain={fetchAgain} />
  }

  return (
    <>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
          {data.map(acook => {
            return (
              <Cocktail acook={acook} key={acook.idDrink} />
            )
          })}
        </div>
    
    </>
    
  )
}

export default CocktailList
