import Swal from 'sweetalert2'
import ItemCount from './ItemCount';
import '../CSS/ItemDetail.css'
import {useContext} from 'react'
import { CartContext } from './CartContext'


function ItemDetail({id, name, img, stock, price, category, description}) {
    
   const { addToCart} = useContext(CartContext)
    
   const onAdd = (numero) => {
    addToCart({id, name, img, stock,description, price, category},numero)
    Swal.fire({
        title: "Mensaje del carrito",
        text: `Usted agrego ${numero} ${name}`,
        icon: "success",
      });
   }
    

    return ( 
        <div className='container-detail'>
            <img src={img}></img>
                <div className='detail-info'>
                    <h2>{name}<br/><br/></h2>
                    <h3>Descripcion: <br/><br/><span>{description}</span><br/><br/></h3>
                    <h2>Precio: $ {price}<br/><br/></h2>
                    <h4>Stock disponible: {stock}</h4>
                    <ItemCount stock={stock} onAdd={onAdd}/>
                </div>
        </div>       
     
    )
}

export default ItemDetail;

