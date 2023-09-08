// Dynamically number of inputs;

import React, {useState} from 'react';

export default function AppForm2() {

    let [formApi, formApiSet] = useState({})

    function formHandle(e) {
        let {name, type, value, checked} = e.target;

        formApiSet(oldDict => ({...oldDict, 
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    function submitHandle(e) {
        e.preventDefault() // stop default returns(referesh, sent, ...);

        console.log(formApi);

    }


    return(
        <section className='aform' id="form">
            <h1>A Form<hr /></h1>
            
            <form onSubmit={submitHandle} id="myForm"/* </section>method="POST\GET" action="myIndex.php"*/ >
                <input name="name" onChange={formHandle} type='text' />
                <input name="mail" onChange={formHandle} type='mail' />
                <textarea name='myText' onChange={formHandle} placeholder="legend" />
                <div className="checkboxes">
                    <input type="checkbox" id="check1" name="check1" onChange={formHandle} />
                    <label  htmlFor='check1'>CheckBox_1</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" onChange={formHandle} id="check2" name="check222" />
                    <label htmlFor='check2'>CheckBox_2</label>
                </div>
                <fieldset>
                    <legend>Current employment status</legend>
                    <ul>
                        <li>
                            <label>
                            <input onChange={formHandle} type="radio" name="radio" value="1"/> label
                            </label>
                        </li>
                        <li>
                            <label>
                                <input onChange={formHandle} type="radio" name="radio" value="2"/> Label 
                            </label>
                        </li>
                        <li>
                            <label>
                                <input onChange={formHandle} type="radio" name="radio" value="3"/> label
                            </label>
                        </li>
                    </ul>
                </fieldset>
                <select onChange={formHandle} name="select" className='btn'>
                    <option value="">--Please Choose--</option>
                    <option value="oop1">Opt1</option>
                    <option value="oop2">Opt2</option>
                    <option value="oop3">Opt3</option>
                </select>
                {/* <button type='button'>If it inside of form, then, Submit is default type</button> */}
            </form>
            <button form='myForm' type="submit">Submit</button>

            <section style={{overflowWrap:"break-word"}}>
                <p>{JSON.stringify(formApi)}</p>
            </section>

        </section>
    )
}