const { configureStore } = require("@reduxjs/toolkit");
import productsReducer from "../redux/productsSlice"
const store = configureStore({
    reducer: {
        productItems: productsReducer,
    },

});
export default store;