import React from 'react';
import './Modal.css';

const Modal = ({ product, closeModal }) => {
    return (
        <div className="modal fade" id="viewmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{product.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={product.img} alt={product.name} />
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>Expiry: {product.expiry}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;