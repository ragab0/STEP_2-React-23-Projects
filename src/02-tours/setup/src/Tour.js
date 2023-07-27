import React from 'react';

const Tour = (props) => {

  const [showMore, setShow] = React.useState(false)

  function clickHandle() {
    props.setData(data => {
      return data.filter(obj => obj.id !== props.theKey)
    })
  }

  return (
    <article className='single-tour'>
      <img src={props.tour.image} alt={props.tour.name}/>
      <footer>
        <div className='tour-info'>
          <h4>{props.tour.name}</h4>
          <h4 className='tour-price'>
            ${props.tour.price}
          </h4>
        </div>
        <p>
          {showMore ? props.tour.info : props.tour.info.slice(0,200)+'...'}
          <button onClick={() => setShow(!showMore)}>read more</button>
        </p>
        <button className='delete-btn' onClick={clickHandle}>Not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;