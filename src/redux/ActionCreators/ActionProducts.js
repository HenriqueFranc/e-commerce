import axios from "axios";


export const fetchProducts = ()=>{

    return async (dispatch)=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log(err)
        })
        dispatch({
            type:'FETCH_PRODUCTS',
            payload: response.data,
        })
    }
}

export const fetchProduct = (id)=>{

    return async (dispatch) => {
        
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
            console.log(err)
        })
        dispatch({
            type:'FETCH_PRODUCT',
            payload: response.data,
        })
    }

}
export const removeProduct = ()=>{

    return async (dispatch) => {
        
        dispatch({
            type:'REMOVE_PRODUCT',
            payload: {} ,
        })
    }

}