import { createHook} from "overmind-react";
const state = {
    value : 0,
    clicked : 0,
    invert:true,
    text:"NULL"
}

const actions = {

    setValue : ({state},{value})=> {
        state.value += value;
        state.invert = !state.invert;

        if (state.invert){
            state.text = "CLICKED"
        } else{
            state.text = "NOT CLICKED"
        }
    },

    setClicked : ({state},clicked) =>{
        state.clicked += clicked
    }
}

export const useOvermind = createHook()

export const config = {
    state,
    actions
}