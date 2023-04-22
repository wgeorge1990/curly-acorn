import React from "react";

export default function Modal(props) {
    return <div className="card m-2">
                <div className="header">
                    <div className="btn btn-primary p-2 m-2"
                        onClick={props.modalHandler}>
                        close
                    </div>
                    <div className="centered m-2">
                        <strong>{props.text}</strong>
                    </div>
                </div>
            </div>
}