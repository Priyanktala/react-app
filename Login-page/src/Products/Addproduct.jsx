import React, { useRef } from 'react'
import axios from 'axios'

const Addproduct = () => {

    let img = useRef();
    let name = useRef();
    let quantity = useRef();
    let price = useRef();
    let expiry = useRef();

    let addData = () => {
        const Productdata = {
            img: img.current.value,
            name: name.current.value,
            quantity: quantity.current.value,
            price: price.current.value,
            expiry: expiry.current.value
        }

        axios.post("http://localhost:3001/product" , Productdata)
        window.location.reload()
    }
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Img Url:</label>
                                    <input type="text" class="form-control" id="recipient-name" ref={img} />
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">name:</label>
                                    <input type="text" class="form-control" id="recipient-name" ref={name} />
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Price:</label>
                                    <input type="text" class="form-control" id="recipient-name" ref={price} />
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">quantity:</label>
                                    <input type="text" class="form-control" id="recipient-name" ref={quantity} />
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Expiry:</label>
                                    <input type="text" class="form-control" id="recipient-name" ref={expiry} />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={addData}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addproduct