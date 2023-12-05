import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  product_type: string,         // Tipos de Roupas
  season: string,               // Estações do ano
  name: string,                 // Nome do produto
  year: number,                 // Ano de lançamento
  price: number,                // Preço do produto
  materials: string[],          // Materiais do produto
  sizes: string[],              // Tamanhos do produto
  intro: string,                // Introdução do produto
  detail: string,               // Detalhes do produto
  how_to_wash: string,          // Como lavar o produto
  images: string[],             // Imagens do produto
  videos: string[],             // Videos do produto
  posts: string[],              // Posts do produto
  creator: string,              // Criador do produto
  related_products: string[]    // Produtos relacionados
}

type CartState = {
  cart: {
    products: Product[],
    total: number,
  },
  offline_products: {
    products: Product[],
    fetchDate: string
  }
}

const initialState: CartState = {
  cart: {
    products: [],
    total: 0,
  },
  offline_products: {
    products: [],
    fetchDate: ''
  }
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.products.push(action.payload);
      state.cart.total += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const product = state.cart.products[action.payload];
      state.cart.total -= product.price;
      state.cart.products.splice(action.payload, 1);
    },
    setOfflineProducts: (state, action: PayloadAction<{ products: Product[], fetchDate: string }>) => {
      state.offline_products = action.payload;
    }
  }
})

export const { addToCart, removeFromCart, setOfflineProducts } = cartSlice.actions;

export default cartSlice.reducer;