const initialState = {
    products: []

}

export const ProductsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state, products: action.payload
            }

            default:
                return state
    }
}
export const ProductDetail = (state = {}, action) => {

    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {
                ...state, ...action.payload
            }
        case 'REMOVE_PRODUCT':
            return {}

            default:
                return state
    }
}