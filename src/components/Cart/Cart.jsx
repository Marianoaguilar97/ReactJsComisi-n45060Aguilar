import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, deleteAll, deleteOne, totalPrecio } = useContext(CartContext);
  if (cart.length === 0)
        return (
            <h1>
                Aún no hay productos, volvé al <Link to="/">Home</Link>
            </h1>
        );

    return (
        <div className='carrito'>
            {cart.map((prod) => (
                <div key={prod.id}>
                    <img src={prod.img} alt={prod.title} width="80px" />
                    <div>
                        <h3>{prod.title}</h3>
                        <h3>{prod.description}</h3>
                        <h3>{prod.cantidad}</h3>
                        <h3>{prod.price}</h3>
                        <button onClick={() => deleteOne(prod.id)}>
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
            <h2>Total: {totalPrecio()}$</h2>
            <button onClick={deleteAll}>Vaciar carrito</button>
            <Link className='finalizarCompra' to={"/checkout"}>Finalizar compra</Link>
        </div>
  );
};

export default Cart