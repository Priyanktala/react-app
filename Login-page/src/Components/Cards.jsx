import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from './Modal.jsx'; 

const Cards = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/product");
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className='row container'>
        {
          data.map((product) => (
            <article key={product.id} className="card card--1 mt-4">
              <img src={product.img} alt={product.name} />
              <div className="card__info">
                <span className="card__category">{product.name}</span>
                <h3 className="card__title">{product.price}</h3>
                <span className="card__by">
                  <button className="btn btn-success" title="author" data-toggle="modal" data-target="#viewmodal" onClick={() => openModal(product)}>view</button>
                </span>
              </div>
            </article>
          ))
        }
      </div>
      {selectedProduct && <Modal product={selectedProduct} closeModal={closeModal} />}
    </>
  );
}

export default Cards;