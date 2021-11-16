import React, { useState } from 'react';
import './alertmodal.scss'

const AlertModal = ({title, body}) => {
    const [activeModal, setActiveModal] = useState(true)
    return (
        <div className="modal-background">
            <div className={activeModal ? "modal active" : "modal"}>
                <div className="modal-body">
                    <h2 className="modal-title">{title}</h2>
                    <div className="modal-content">{body}</div>
                </div>
                <span>X</span>
            </div>
        </div>
    )
}

export default AlertModal