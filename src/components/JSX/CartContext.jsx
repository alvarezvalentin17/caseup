import React from 'react'
import {createContext, useState} from 'react'
import Cart from './Cart'

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({defaultValue = [], children}) => {
    const [cart, setCart] = useState(defaultValue);

    const addToCart = (item, quantity) => {
        
        if(IsInCard(item.id)) {
            const newCart = [...cart]
            for (const element of newCart) {
                if(element.item.id == item.id){
                    element.quantity = element.quantity + quantity;
                }

            }
            setCart(newCart)
        } else {
            setCart(
                [
                    ...cart,
                    {
                        item: item,
                        quantity: quantity
                    }
                ]
                )
               
        }
    
        }

    const IsInCard = (id) => {
        return cart.find((element)=> element.item.id === id)
    }

    const removeFromCart= (id) => {
        const newCart = [...cart].filter(element=>element.item.id !== id);
        setCart(newCart)
    }


    const clearCart = ()=> {
        setCart([]);
    }

        const getQuantity = () => {
        let cantidad = 0;
        cart.forEach((element) => cantidad = cantidad + element.quantity)
        return cantidad
    }

 
    const getTotal = () => {
        let total = 0;
        cart.forEach((element)=> {
            total = total + (element.quantity * element.item.price)
        })
        return total
    }
    

    const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        getQuantity,
        getTotal,
    }


    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
}
