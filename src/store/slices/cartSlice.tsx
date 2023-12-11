import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

import RoupaFloar from "@/types/RoupaFloar";

export type CartItem = RoupaFloar & {
    quantity: number;
};

type CartState = {
    cart: {
        products: CartItem[];
        total: number;
    };
    offline_products: {
        products: CartItem[];
        fetchDate: string;
    };
};

const initialState: CartState = {
    cart: {
        products: [],
        total: 0,
    },
    offline_products: {
        products: [],
        fetchDate: "",
    },
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<RoupaFloar>) => {
            // Check if the product already exists in the cart
            const existingProductIndex = state.cart.products.findIndex((product) => product.sys.id === action.payload.sys.id);

            if (existingProductIndex >= 0) {
                // If the product already exists in the cart, increment its quantity
                state.cart.products[existingProductIndex].quantity += 1;
            } else {
                // If the product does not exist in the cart, add it with a quantity of 1
                const newCartItem: CartItem = {
                    ...action.payload,
                    quantity: 1,
                };
                state.cart.products.push(newCartItem);
            }

            // Update the total price
            state.cart.total += action.payload.fields.price;
        },
        removeFromCart: (state, action: PayloadAction<RoupaFloar>) => {
            // Find the index of the product in the cart
            const productIndex = state.cart.products.findIndex((product) => product.sys.id === action.payload.sys.id);

            if (productIndex >= 0) {
                // If the product is in the cart, decrease the total price and remove it
                const product = state.cart.products[productIndex];
                state.cart.total -= product.fields.price * product.quantity;
                state.cart.products.splice(productIndex, 1);
            }
        },
        decrementQuantity: (state, action: PayloadAction<RoupaFloar>) => {
            // Find the index of the product in the cart
            const productIndex = state.cart.products.findIndex((product) => product.sys.id === action.payload.sys.id);

            if (productIndex >= 0) {
                // If the product is in the cart, decrease its quantity
                const product = state.cart.products[productIndex];
                if (product.quantity > 1) {
                    product.quantity -= 1;
                    state.cart.total -= product.fields.price;
                } else {
                    // If the quantity is 1, remove the product from the cart
                    state.cart.total -= product.fields.price;
                    state.cart.products.splice(productIndex, 1);
                }
            }
        },
        setOfflineProducts: (state, action: PayloadAction<{ products: CartItem[]; fetchDate: string }>) => {
            state.offline_products = action.payload;
        },
    },
});

export const { addToCart, decrementQuantity, removeFromCart, setOfflineProducts } = cartSlice.actions;

export default cartSlice.reducer;
