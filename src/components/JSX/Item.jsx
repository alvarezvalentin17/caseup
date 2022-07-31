import '../CSS/Item.css'
import {Link} from 'react-router-dom'

function Item({id,name,price,img,category,description}) {
   
    return (
        <Link to={`/item/${id}`}>
            <div className="container">
            <div className="card cardStyle">
                <img src={img}alt={name} className='card card-image' />
                <div className="card-body">
                    <h5 className="card-title">Nombre: {name}</h5><br/><br/>
                    <p className='precio'>Precio: $ {price}</p>
                </div>
            </div>
        </div>     
        </Link>
    )
}

export default Item;