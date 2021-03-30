import { createSelector } from "reselect";

const homeSelector = (state) => state.home;

export const clothesSelector = () =>
  createSelector(homeSelector, (home) => home.clothe);
