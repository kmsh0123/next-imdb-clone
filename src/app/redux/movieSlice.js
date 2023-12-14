import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searched: '',
};

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setSearched: (state, { payload }) => {
            state.searched = payload;
        }
    }
})

export const {setSearched} = movieSlice.actions;
export default movieSlice.reducer;