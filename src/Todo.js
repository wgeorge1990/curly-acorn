import React, { useState } from "react";
import Modal from "./Modal";

function Todo(props) {
    const [showModal, setShowModal] = useState(true);


    function modalHandler() {
        setShowModal((showModal) => !showModal);
    }

    return (
        <div classname='card'>
            <div>
                { showModal && <Modal modalHandler={modalHandler} text={props.text} onClick={modalHandler} />}
                { !showModal && <div className="btn btn-primary" onClick={modalHandler}>show</div> }
            </div>
        </div> )
}

export default Todo;