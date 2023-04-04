import {createSlice} from '@reduxjs/toolkit'
import productData from '../../data.json'

export const appSlice = createSlice({
	name: 'appSlice',
	initialState: {
		products: [...productData.items],
		cart:[],
		orders:[],
	},
	reducers: {
		setCart: (state, action) => {
			state.cart = action.payload;
			return state;
		},
        setOrders: (state, action) => {
			state.orders = action.payload;
			return state;
		},
	},
});

export const {setCart, setOrders} = appSlice.actions;

export default appSlice.reducer;
