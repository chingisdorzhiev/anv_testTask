import { configureStore} from "@reduxjs/toolkit";
import clientSlice from './ClientsSlice'

export default configureStore ({
    reducer: {
        [clientSlice.name]: clientSlice.reducer,
    },
})