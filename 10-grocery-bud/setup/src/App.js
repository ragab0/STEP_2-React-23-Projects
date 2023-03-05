import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import List from './List';
import Alert from './Alert';
import './index.css';


function App() {

  const [id] = nanoid();
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState(null);
  const [inpVal, setInpVal] = useState('');
  const [currentToBeEdit, setCurrentToBeEdit] = useState(null);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('data')) || []);
  }, [])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data])


 
  function inpHandler(e) {
    setInpVal(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault()
    if (!inpVal.length) {
      return setAlert('failled');

    }
    if (currentToBeEdit) {
      setData(old => old.map((obj, i) => {
        return (
          obj.id === currentToBeEdit.id ? {val: inpVal, id: currentToBeEdit.id} : obj
        )
      }));
      setAlert('editing');
      setCurrentToBeEdit(null);
      
    } else {
      setData(old => [{val:inpVal, id}, ...old]);
      setAlert('adding');
      
    }
    setInpVal('');

  }

  return (
    <section className='section-center'>
      {alert && <Alert alert={alert} setAlert={setAlert}/>}
      <h3 style={{textAlign: 'center'}}>Grocery Bud</h3>
      <form className='grocery-form'>
        <div className='grocery-container'>
          <div className='form-control'>
            <input className='grocery' placeholder='e.g. eggs' value={inpVal}  onChange={inpHandler}/>
            <button className='submit-btn' onClick={submitHandler}>{ currentToBeEdit ? 'Edit' : 'Submit'}</button>
          </div>
        </div>
      </form>
      <List data={data} 
            setData={setData} 
            setCurrentToBeEdit={setCurrentToBeEdit}
            setInpVal={setInpVal}
            setAlert={setAlert}
            />
    </section>
  )
}

export default App
