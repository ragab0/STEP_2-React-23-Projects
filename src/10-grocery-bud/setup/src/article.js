import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa'


export default function Article({obj, setCurrentToBeEdit, setData, setInpVal, setAlert}) {

    const {val, id} = obj;

    function editHandler() {
        setCurrentToBeEdit(obj);
        setInpVal(val);
    }

    function removeHandler() {
        setData(old => {
            return old.filter((o, i) => {
                return o.id !== obj.id
            })
        })
        setAlert('removing')
    }

    return(
        <article className="grocery-item" data-id={id}>
            <p className="title">{val}</p>
            <div className="btn-container">
                <button className="edit-btn" onClick={editHandler}>
                    <FaEdit />
                </button>
                <button className="delete-btn" onClick={removeHandler}>
                    <FaTrash />
                </button>
            </div>
        </article>
    )
}