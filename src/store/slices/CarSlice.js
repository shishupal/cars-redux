import { createSlice, nanoid} from "@reduxjs/toolkit";


const CarSlice = createSlice({
    name: 'CarSlice',
    initialState: {
        search:'',
        data:[]
    },
    reducers:{

        changeSearch (state, action){
            state.search =action.payload;
        },

        addCars (state, action) {
            state.data.push({
                name: action.payload.name,
                cost:action.payload.cost,
                id:nanoid()
            })
        },
        removeCars (state, action) {
           const update= state.data.filter((car)=> car.id !==action.payload);
            state.data = update;
        }

    }
});

export const {changeSearch, addCars, removeCars} =CarSlice.actions;
export const CarReducer= CarSlice.reducer;
