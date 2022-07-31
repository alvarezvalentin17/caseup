import React from 'react'
import Item from '../JSX/Item';

export const ItemList = ({ productos }) => {

  return (
    <div className='container'>
      <div className="row justify-content-evely">
        {productos.map((unProducto) => 
        <Item 
          name={unProducto.name}
          img={unProducto.img}
          price={unProducto.price} 
          id={unProducto.id} 
          />)}
       </div>
    </div>
        

  )
}

export default ItemList;
