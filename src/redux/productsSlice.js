const { createSlice } = require("@reduxjs/toolkit");

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        cart: {},
        quantities: {},
        favorites: {}
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        addToCart: (state,action) => {
            const id = action.payload;

            state.cart[id] = (state.cart[id] || 0) +1;
            
        },
        removeFromCart: (state,action) => {
            const id = action.payload;
            delete state.cart[id];
        },
        increaseQuantity: ( state,action) => {
            const id = action.payload;
            if (state.cart[id]) {
                state.cart[id] += 1;
            }
        },
        decreaseQuantity: ( state,action) => {
            const id = action.payload;
            if(state.cart[id] >1) {
                state.cart[id] -= 1;
            }else {
                delete state.cart[id];
            }
        },
        addToFavorite: (state,action) => {
            const id = action.payload;
            state.favorites[id] = true;
        },
        removeFromFavorite: (state,action) => {
            const id = action.payload;
            delete state.favotites[id];
        }
    }
})
export const{setProducts,addToCart,removeFromCart,increaseQuantity,decreaseQuantity,addToFavorite,removeFromFavorite} = productsSlice.actions;
export default productsSlice.reducer;