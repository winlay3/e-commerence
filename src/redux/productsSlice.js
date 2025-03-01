const { createSlice } = require("@reduxjs/toolkit");

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        cart: {}
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        addToCart: (state,action) => {
            const id = action.payload;

            state.cart[id] = (state.cart[id] || 0) +1;
            
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
        }
    }
})
export const{setProducts,addToCart,increaseQuantity,decreaseQuantity} = productsSlice.actions;
export default productsSlice.reducer;