import { createAction } from "@ngrx/store";
// createAction([type], action_name)

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
