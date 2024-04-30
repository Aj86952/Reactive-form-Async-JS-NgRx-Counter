import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
// It maintains state and do state manipulation > createReducer(initialState, on(action to update state))

export interface counterState {
  count: number;
}

export const initialCounterState: counterState = {
  count: 0
};

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 0 }))
);
