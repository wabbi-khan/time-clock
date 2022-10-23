import { fetchUser } from "../utils/fetchLocalStorageData";

// const userInfo = fetchUser();
// const cartInfo = fetchCart();
export const initialState = {
    user: fetchUser(),
    // foodItems: null,
    // cartShow: false,
    // cartItems: cartInfo,
};