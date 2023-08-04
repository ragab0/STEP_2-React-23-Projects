import React from 'react'
import { Link } from 'react-router-dom'
// import { useGlobalContext } from '../context'

const Cocktail = ({acook}) => {

  // const {setCurrentSingle} = useGlobalContext()

  const {strCategory,idDrink, strDrink='name', strDrinkThumb='src', strAlcoholic} = acook

  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={strDrinkThumb} alt='' />
      </div>
      <div className='cocktail-footer'>
        <h3>{strDrink}</h3>
        <h4>{strCategory}</h4>
        <p>{strAlcoholic}</p>
        {/* <div onClick={() => setCurrentSingle(acook)} style={{display: 'inline-block'}}> */}
          <Link to={`cooktail/${idDrink}`}className='btn btn-primary btn-details'>
            details
          </Link>
        {/* </div> */}
        
      </div>
    </article>
  )
}

export default Cocktail
