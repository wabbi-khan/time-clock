import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
// const cartInfo = fetchCart();
export const initialState = {
    user: userInfo,
    watchItems: null,
    // cartShow: false,
    // cartItems: cartInfo,
};