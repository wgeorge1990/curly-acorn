import React, { useState } from "react";
import Modal from "./Modal";

export default function Todo(props) {
    const [showModal, setShowModal] = useState(true);


    function modalHandler() {
        setShowModal((showModal) => !showModal);
    }

    return (
        <div classname='card'>
            <div>
                { showModal && <Modal modalHandler={modalHandler} text={props.text} onClick={modalHandler} />}
                { !showModal && <div className="btn btn-danger m-2" onClick={modalHandler}>show</div> }
            </div>
        </div> )
}
