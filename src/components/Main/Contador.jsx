import React from 'react'
import { useState } from 'react'

const Contador = ({ stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const agregar = () => onAdd(cantidad);

    return (
        <div className='contador'>
            <button onClick={restar}>-</button>
            <p>{cantidad}</p>
            <button disabled={cantidad === stock} onClick={sumar}>
                +
            </button>
            <button onClick={agregar}>Agregar al carrito</button>
        </div>
    );
};


export default Contador