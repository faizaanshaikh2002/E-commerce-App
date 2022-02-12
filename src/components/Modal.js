import React from 'react';

const Modal = ({ cartItems, setcartItems }) => {

    const handleRemoveItem = (id) => {
        let tempItem = [...cartItems]
        tempItem = tempItem.filter(item => item.id !== id)
        setcartItems(tempItem)
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel" style={{ color: "black" }}>My Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body ">
                        {cartItems.map((element) => {
                            // console.log(element)
                            return (
                                <div key={element.id}>
                                    <div className='list-group mb-2'>
                                        <div className='list-group-item '>
                                            <div className='row'>
                                                <div className='col-md-2' style={{ overflow: "hidden" }}>
                                                    <img className='d-flex ms-2' src={element.image} alt="" style={{ height: "5rem", width: "5rem" }} />
                                                </div>
                                                <div className="col-md-5 d-flex">
                                                    <h6 >{element.title}</h6>
                                                </div>
                                                <div className="col-md-3 d-flex">
                                                    <h6 className=' ms-auto text-success'>${element.price}</h6>
                                                </div>
                                                <div className='col-md-2 d-flex'>
                                                    <button type='button' className='btn-close ms-auto me-3' onClick={() => { handleRemoveItem(element.id) }} aria-label='Close'></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal