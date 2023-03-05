import React from 'react'

export default function Photo({data, loading}) {
  


  return (
    <div className='photos-center'>
        {
          data.map((art, i) => {

            const {
              urls: { regular }, 
              alt_description, 
              likes, 
              user : {name, portfolio_url, profile_image: {medium}}
            } = art

            return (
              <article className='photo' key={i}>
                <img src={regular} alt={alt_description} />
                <div className='photo-info'>
                  <div>
                    <h4>{name}</h4>
                    <p>{likes} likes</p>
                  </div>
                  <a href={portfolio_url}>
                    <img src={medium} alt={name} className='user-img' />
                  </a>
                </div>
              </article>
            )
          })
        }
    </div>
  )
}