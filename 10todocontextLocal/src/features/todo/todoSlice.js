import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos :[{id: 1, text:"Hello World"}]
}



export const todoSlice = createSclice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text:"Hello World"
            }
        },
        removeTodo: () => {},
    }
})