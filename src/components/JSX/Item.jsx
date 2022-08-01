import '../CSS/Item.css'
import {Link} from 'react-router-dom'

function Item({id,name,price,img,category,description}) {
   
    return (
        <Link to={`/item/${id}`}>
            <div className="container">
            <div className=" card">
                <img src={img}alt={name} className='img' />
                <div className="info">
                    <h5 className="name"><span>{name}</span></h5><br/><br/>
                    <p className='price'>Precio: $ {price}</p>
                </div>
            </div>
        </div>     
        </Link>
    )
}

export default Item;