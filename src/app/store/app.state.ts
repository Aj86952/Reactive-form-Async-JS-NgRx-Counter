import { counterState } from "./counter/counter.reducer";
//It creates a global state and we will have to maintain multiple states

export interface appState{
    counter : counterState
    // cart : cartState    (second state for example)
}