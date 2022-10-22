export const actionType = {
    SET_USER: "SET_USER",
    SET_WATCH_ITEMS: "SET_WATCH_ITEMS",
    // SET_CART_SHOW: "SET_CART_SHOW",
    // SET_CART_ITEMS: "SET_CART_ITEMS",
    // SET_CART: "SET_CART",
};
const reducer = (state, action) => {
    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionType.SET_WATCH_ITEMS:
            return {
                ...state,
                watchItems: action.watchItems,
            };
            // case actionType.SET_CART_SHOW:
            //     return {
            //         ...state,
            //         cartShow: action.cartShow,
            //     };
            // case actionType.SET_CART_ITEMS:
            //     return {
            //         ...state,
            //         cartItems: action.cartItems,
            //     };
        default:
            return state;
    }
};
export default reducer;