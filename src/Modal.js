import React from "react";

function Modal(props) {
    return (
        <div className="card">
            <div className="header">
                <div className="btn btn-primary p-3 m-3" onClick={props.modalHandler}>close</div>
                <div className="centered col-12 m-2"><strong>{props.text}</strong></div>
            </div>
            <div className="section">
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default Modal;