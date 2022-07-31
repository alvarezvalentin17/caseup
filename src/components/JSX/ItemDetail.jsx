import {Link} from 'react-router-dom'
import ItemCount from './ItemCount';
import '../CSS/ItemDetail.css'
import {useContext} from 'react'
import { CartContext } from './CartContext'


function ItemDetail({id, name, img, stock, price, category, description}) {
    
   const { addToCart} = useContext(CartContext)
    
   const onAdd = (numero) => {
    addToCart({id, name, img, stock,description, price, category},numero)
   }
    

    return ( 
        <div className="container1">
            <div className="card1 cardStyle1">
                <img src={img}alt={name} className='card1 card-image1' />
                <div className="card-body1">
                    <h5 className="card-title1">Nombre: {name}</h5>
                    <p className='precio1'>Descripción: {description}</p>
                    <p className='precio1'>Precio: $ {price}</p>
                    <p className='precio1'>Cantidad disponible: {stock}</p>
                    <ItemCount stock={stock} onAdd={onAdd}/>
                    
                </div>
            </div>
            
        </div>
        
     
    )
}

export default ItemDetail;

