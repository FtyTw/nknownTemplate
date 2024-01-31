import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@redux/index';
import { NknownState } from '@redux/slices/nknown';

export const nknownStateSelector = (state: RootState): NknownState =>
  state.nknown;

export const selectNknownSwPerson = createSelector(
  nknownStateSelector,
  state => state?.swPerson,
);

export const selectNknownSwPersonByName = createSelector(
  nknownStateSelector,
  (_state: RootState, name: string) => name,

  (state, name: string) =>
    state?.planets?.filter(planet => planet?.name === name),
);
