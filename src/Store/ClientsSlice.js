import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    arr: [1, 2, 3],
}

const clientSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        getClients(state, action) {
            // return { ...state, arr: [...action.payload] };
            state.arr = action.payload;
        },
        addClient(state, action) {
            state.arr.push(action.payload);
        },
        deleteClient(state, action) {
            const elIndex = state.arr.findIndex(el => el.id === +action.payload);
            state.arr.splice(elIndex, 1);
        },
        editClient(state, action) {
            const elIndex = state.arr.findIndex(el => el.id === +action.payload.id);
            state.arr[elIndex] = action.payload.userData;
        }
    },
})

export const {getClients, addClient, deleteClient, editClient} = clientSlice.actions;
export default clientSlice;