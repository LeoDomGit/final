import { createSlice } from "@reduxjs/toolkit";
const initialState={
    task :[],
}
export const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask : (state,action)=>{
            console.log(action.payload);
            state.task.push(action.payload);
        },
        editTask: (state,action)=>{
            state.task.forEach(el => {
                if(el.id===action.payload.id){
                        el.todo=action.payload.todo;
                        el.status=false
                }

            });
        },
        finishtask : (state,action)=>{
            state.task.forEach(el => {
                if(el.id===action.payload){
                        el.status=true
                    console.log(state.task);
                }

            });
        },
        deleteTaskSlice : (state,action)=>{
            console.log(action.payload);
                state.task.filter((task)=>task.id !== action.payload);
                console.log(state.task);
        }
    }
})
export const {addTask,editTask,finishtask,deleteTaskSlice} = taskSlice.actions;
export const selectTask = (state)=>state.task;
export default taskSlice.reducer