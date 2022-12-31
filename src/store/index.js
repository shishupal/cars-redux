import {configureStore} from '@reduxjs/toolkit';
import { CarReducer,addCars, changeSearch, removeCars } from './slices/CarSlice';
import {FormReducer, changeName, changeValue } from './slices/FormSlice';



const store = configureStore({
    reducer:{
        form:FormReducer,
        cars:CarReducer
    }
});

export { addCars, changeSearch, removeCars, changeName, changeValue};

export default store;