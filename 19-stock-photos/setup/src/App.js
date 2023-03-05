import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Alert from './alert';
import Photo from './Photo'

const mainUrl = 'https://api.unsplash.com/photos/?client_id=Lcq67bHel2R-ZbFbG8E-bh2NEtnFBvmRqR9biWTNyNg';
const searchUrl = 'https://api.unsplash.com/search/photos/?client_id=Lcq67bHel2R-ZbFbG8E-bh2NEtnFBvmRqR9biWTNyNg';


export default function App() {
  
  const [url, setUrl] = useState(mainUrl);
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState(null); //comming
  const [loading, setLoading] = useState(true);
  const [inpValue, setInpValue] = useState('');
  const [pageNumb, setPageNumb] = useState(1);
  const [newComingData, setNewComingData] = useState(false);
  

  function formHandler(e) {
    e.preventDefault();
    setPageNumb(1);
    setUrl(searchUrl + '&query=' + inpValue);
    
  }

  useEffect(() => {
    setLoading(true); 
     fetch(url + '&page=' + (pageNumb))
    .then(res => res.json())
    .then(data => data.results ?? data)
    .then(data => setAlert(data.length ? 'comming' : 'failled') || data)
    .then(data => setData(old => pageNumb === 1 ? data : [...old, ...data] ))
    .catch(() => setAlert('failled'))
    .finally(() => setLoading(false))

  }, [url, pageNumb])

  useEffect(() => {
    function scrolling(e) {
      var html = document.documentElement;
      var percent = html.scrollTop / (html.scrollHeight - html.clientHeight) * 100;
      if (percent > 99) {
        setNewComingData(true);
      } else {
        setNewComingData(false);
      }
    }
    window.addEventListener('scroll', scrolling);
    return () => window.removeEventListener('scroll', scrolling);

  }, [])

  useEffect(() => {
    if (newComingData) {
      setPageNumb(old => old +1);
    }

  }, [newComingData])


  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input className='form-input' placeholder='search' value={inpValue} onChange={(e) => setInpValue(e.target.value)}/>
          <button className='submit-btn' onClick={formHandler}>{<FaSearch />}</button>
        </form>
      </section>
      <section className='photos'>
        {alert && <Alert alert={alert} setAlert={setAlert}/>}
        <Photo data={data} loading={loading}/>
        {loading && <h2 className='loading' style={{marginTop: '-50px'}}>Loading...</h2>}
      </section>
    </main>
  )

}