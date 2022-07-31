import { useEffect, useState } from 'react';
import ItemList from '../JSX/ItemList';
import {useParams} from 'react-router-dom'
import {collection,getDocs,query,where} from 'firebase/firestore'
import { db} from '../services/FirebaseConfig';
import { Spinner, Container, Row } from 'react-bootstrap'
import Item from '../JSX/Item'
import '../CSS/Item.css'

function ItemListContainer({gretting}) {

        const [productos, setProductos] = useState([]);
        const [isLoading, setIsLoading] = useState();
        const {idcategoria} =useParams();

        useEffect(() => {

            setIsLoading(true)
                const collections= collection(db,"Fundas")
    
                const q = idcategoria ? query(collections,where('category','==',idcategoria)) : collections
                 getDocs(q)
                 .then((datos)=>{
                    setProductos(datos.docs.map((doc)=>({id:doc.id,...doc.data()})));
    
                 }).finally(()=>{
                    setIsLoading(false)
                 })
    
    
        }, [idcategoria]) 

    return (
            <>
            <h2>{gretting}</h2>
            {
                isLoading ?
                     <div>
                            <span className='preloader'>Cargando...</span>
                      </div>
                    : 
                    <ItemList productos={productos}/>
            }
            </>
    )
}

export default ItemListContainer;