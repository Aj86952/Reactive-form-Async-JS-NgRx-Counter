import { createSelector } from '@ngrx/store';
import { appState } from '../app.state';
//createSelector(selectedState, retrun only required data from that)

export const selectCounterState = (state: appState) => state.counter;

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
);
