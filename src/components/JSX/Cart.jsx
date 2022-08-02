import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import Form from './Form'
import { collection, addDoc,getFirestore } from 'firebase/firestore'
import '../CSS/Cart.css'
import Swal from "sweetalert2";



export default function Cart() {

  const { cart, removeFromCart,getTotal,getQuantity, clearCart} = useContext(CartContext)
  const [empty, setEmpty] = useState(true);
  const [showForm, setShowForm] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [confirmation, setConfirmation] = useState(false)

  const hoy = new Date()

  

  const handleFinalize = () =>{
    setShowForm(true)
}

const createOrder = (buyer) =>{
   
    const newOrder = {
        buyer,
        cart,
        date: hoy,
        total: getTotal()
    }
    
    const db = getFirestore();
    const orderCollection = collection(db, "order");

    addDoc(orderCollection, newOrder)
        .then(({id}) => setOrderId(id), setConfirmation(true))
        .catch((e)=>{console.log(e)})
        clearCart()   
}

  useEffect(() => {
    if(cart.length === 0) {
        setEmpty(true)
    } else {
        setEmpty(false)
    }
  }, [cart.length]);

  if(!empty) {

    return (
        
            <div>
                {cart.map((element) => (
                                <div className="container">
                                <div className=" card">
                                    <img src={element.item.img}alt={element.item.name} className='img' />
                                        <div className="info">
                                            <h5 className="name"><span>{element.item.name}</span></h5><br/><br/>
                                            <p className='price'>Categoria: {element.item.category}</p>
                                            <p className='price'>Precio: $ {element.item.price}</p>
                                            <p className='price'>Cantidad: {element.quantity}</p>
                                            <br />
                                            <button onClick={()=> { removeFromCart(element.item.id)}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <line x1="4" y1="7" x2="20" y2="7" />
                                                    <line x1="10" y1="11" x2="10" y2="17" />
                                                    <line x1="14" y1="11" x2="14" y2="17" />
                                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                            </button> 
                                        </div>
                                </div>
                            </div>         
                ))}

             <div>
             <h4 className='totales'>TOTAL DE PRODUCTOS: {getQuantity()}</h4>
                <h4 className='totales'>PRECIO TOTAL: $ {getTotal()}</h4>
                <button className='btn-purchase' onClick={handleFinalize}>Comprar</button>
                {showForm ? <Form createOrder={createOrder}/> : null}
             </div>

            </div>
            )
        } else if(orderId && confirmation) {
            return(
                <div >
                    <h3>Su Orden No. <span>{orderId}</span> ha sido confirmada</h3>
                    <Link to="/" exact>
                        <button className='btn-purchase'>Continuar Comprando</button>
                    </Link>
                </div>
            )
        } else {
            return (
                <>
                    <h2>No hay nada en el carrito aun </h2>
                    <Link to='/'><button>Ir al inicio</button></Link>
                </>
            
            )
            
        }
    }
