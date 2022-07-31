import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { getCase, getFundas} from '../services/FirebaseConfig'
import ItemDetail from './ItemDetail';
import {db}  from '../services/FirebaseConfig' 
import { collection,doc,getDoc } from 'firebase/firestore'
// import ItemDetailList from './ItemDetailList';


function ItemDetailContainer() {
    
        const [productos, setProductos] = useState([])
        const {iditem} = useParams();
        const [isLoading,setIsLoading] = useState()

        useEffect(() => {

            setIsLoading(true)
            const  miproducto= doc(db,'Fundas',iditem)
            getDoc(miproducto)
            .then((prod)=>{
                setProductos({id:prod.id, ...prod.data()});

            })
            .catch(console.log())
            .finally(() => {
                setIsLoading(false)
            })
         }, [])

    return (
        <>
        <h2>Detalle de los productos!</h2> 
        {
            isLoading ? 
            <div>
                <span >Cargando...</span>
            </div>
            :
            <ItemDetail {...productos}/>
        }
        
        </>
    )
}

export default ItemDetailContainer;